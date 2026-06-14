export default {
    layout: "projects.njk",
    eleventyComputed: {
        permalink: (data) => {
            if (data.permalink === false) return false;
            if (typeof data.permalink === "string" && data.permalink !== "") {
                return data.permalink;
            }
            const stem = data.page.filePathStem;
            if (stem === "/index") return "/";

            const segments = stem.split('/').filter(Boolean);

            const isIndexFile = segments[segments.length - 1] === "index";

            if (segments.length > 1) {
                if (isIndexFile && segments.length === 2) {
                    return `/${segments[0]}/`;
                }
                segments.shift();
            }

            const finalPath = "/" + segments.join("/") + "/";

            return finalPath.replace(/\/index\/$/, "/");
        },
        collection: (data) => {
            return data.page.url.replace(/[^/]/g, "").length == 2 ? "projects" : null
        },
    }
}