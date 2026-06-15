import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import postcss from "postcss/lib/postcss";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import postcssConfig from "postcss-load-config";
import pluginRss from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { DateTime } from "luxon";
import pluginTOC from '@uncenter/eleventy-plugin-toc';
import pluginIcons from 'eleventy-plugin-icons';
import eleventyLucideicons from "@grimlink/eleventy-plugin-lucide-icons";

import filters from "./_config/filters.js";
import process from "node:process";

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/*");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginTOC);
  if (process.env.BUILD_TYPE == "production") {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
      formats: ["webp", "png"],
      height: ["auto"],
      htmlOptions: {
        imgAttributes: {
          loading: "lazy",
          decoding: "async",
        },
      },
    });
  }
  eleventyConfig.addPlugin(pluginIcons, {
    sources: [{ name: 'lucide', path: 'node_modules/lucide-static/icons' },
    { name: 'simple', path: 'node_modules/simple-icons/icons' }],
  })
  eleventyConfig.addPlugin(eleventyLucideicons);

  eleventyConfig.addPassthroughCopy("src/public");
  /* layout aliases */
  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("page", "page.njk");
  eleventyConfig.addLayoutAlias("post", "post.njk");

  /* filters */
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  /* collections */
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/**/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });
  eleventyConfig.addPassthroughCopy("src/blog/**/*.{svg,webp,png,jpg,jpeg,gif}");
  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/products/**/index.md").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });


  /* shortcodes */
  eleventyConfig.addShortcode("postCard", function (post) {
    return `
    <section class="card stack">
        <h3><a href="${post.url}">${post.data.title}</a></h3>
        <p class="steel-subtitle">${post.data.description}</p>
          <p style="margin-top: 0.4em;"><small><time datetime="${post.date}">${filters.formatPostDate(post.date)}</time></small></p>
    </section>
    `;
  });

  /* custom date formats */
  eleventyConfig.addDateParsing(function (dateValue) {
    let localDate;
    if (typeof dateValue === "string") {
      localDate = DateTime.fromFormat(dateValue, "yyyy-MM-dd HH:mm:ss").setZone(
        "Europe/Lisbon"
      );
    }
    if (localDate?.isValid === false) {
      throw new Error(
        `Invalid \`date\` value (${dateValue}) is invalid for ${this.page.inputPath}: ${localDate.invalidReason}`
      );
    }
    return localDate;
  });
  /* plugins */
  const md = markdownIt({ html: true });
  md.use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "anchor",
      symbol: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
      ariaHidden: false,
    }),
    level: [1, 2, 3, 4],
    slugify: eleventyConfig.getFilter("slugify"),
  });
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPreprocessor("macro-inject", "njk,md", (data, content) => {
    return (
      `{%- from "components/card.njk" import card, linkCard -%}\n{%- from "components/imageShowcase.njk" import imageShowcase -%}\n{%- from "components/imageGallery.njk" import imageGallery -%}\n` +
      content
    );
  });

  /* html and css optimization */
  eleventyConfig.addBundle("css", {
    transforms: [
      async function (content) {
        const { plugins } = await postcssConfig();
        const result = await postcss(plugins).process(content, {
          from: this.page.inputPath,
          to: null,
        });
        return result.css;
      },
    ],
  });
}

export const config = {
  templateFormats: [
    "md",
    "njk",
    "html",
    "11ty.js",
  ],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    input: "src",
    includes: "../_includes",
    layouts: "../_layouts",
    data: "../_data",
    output: "_site",
  },
};
