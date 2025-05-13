import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import markdownItFootnote from "markdown-it-footnote";
import markdownItAttrs from "markdown-it-attrs";
import postcss from "postcss/lib/postcss";
import { EleventyRenderPlugin } from "@11ty/eleventy";
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import postcssConfig from "postcss-load-config";
import pluginRss from "@11ty/eleventy-plugin-rss";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { DateTime } from "luxon";
import pluginIcons from 'eleventy-plugin-icons';
import logToConsole from 'eleventy-plugin-console-plus'
import filters from "./_config/filters.js";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });
  eleventyConfig.addPlugin(pluginIcons, {
    sources: [{ name: 'lucide', path: 'node_modules/lucide-static/icons' },
    { name: 'simple', path: 'node_modules/simple-icons/icons' }],
  })

  eleventyConfig.addPassthroughCopy("src/public");
  /* layout aliases */
  eleventyConfig.addLayoutAlias("base", "base.njk");
  eleventyConfig.addLayoutAlias("page", "page.njk");
  eleventyConfig.addLayoutAlias("post", "post.njk");
  eleventyConfig.addPlugin(logToConsole);

  /* filters */
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
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
  md.use(markdownItAttrs, {
    leftDelimiter: "[-",
    rightDelimiter: "-]",
  });
  md.use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: "after",
      class: "anchor",
      symbol: "#",
      ariaHidden: false,
    }),
    level: [1, 2, 3, 4],
    slugify: eleventyConfig.getFilter("slugify"),
  });
  md.use(markdownItFootnote);
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPreprocessor("macro-inject", "njk,md", (data, content) => {
    return (
      `{%- from "components/card.njk" import card -%}\n` +
      content
    );
  });

  /* html and css optimization */
  eleventyConfig.addBundle("css", {
    transforms: [
      async function (content) {
        const { plugins } = await postcssConfig();
        let result = await postcss(plugins).process(content, {
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
