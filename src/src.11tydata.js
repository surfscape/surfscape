export default {
    layout: "page",
    eleventyComputed: {
        eleventyNavigation: {
            key: (data) => {
                if (!data.key) {
                    return data.title
                } else {
                    return data.key
                }
            },
            parent: (data) => data.parent,
            order: (data) => data.order,
            collection: (data) => data.collection,
        },
    },
}