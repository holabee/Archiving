export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'contents',
            title: 'Contents',
            type: 'blockContent',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'thumnail',
            title: 'Thumnail',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'alt',
                    type: 'string',
                    options: { isHighlighted: true },
                    validation: (Rule) => Rule.required(),
                },
            ],
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'tag',
            title: 'Tag',
            type: 'reference',
            to: { type: 'tag' },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'thumnail',
        },
        prepare(selection) {
            const { author } = selection;
            return Object.assign({}, selection, {
                subtitle: author && `by ${author}`,
            });
        },
    },
};
