export default {
    eleventyNavigation: (data) => {
        if (data.eleventyNavigation) return data.eleventyNavigation;
        if (!data.eleventyExcludeFromCollections && !data.excludeFromNav) {

            return {
                key: data.key || data.title,
                parent: data.parent,
                order: data.order,
                collection: data.collection,
            };
        }
        return false;
    },
}