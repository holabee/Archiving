export default {
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subgitle: 'slug.current',
        },
    },
};
