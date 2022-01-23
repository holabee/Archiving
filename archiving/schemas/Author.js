export default {
    name: 'author',
    title: 'Author',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'components',
            title: 'Components',
            type: 'string',
        },
        {
            name: 'keywords',
            title: 'Keywords',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
};
