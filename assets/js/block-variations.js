
wp.domReady( () => {
	wp.blocks.registerBlockVariation(
        'core/group',
        {
            name: 'info-group-box',
            title: 'Callout-Info (Group)',
            attributes: { 
                // className: 'is-style-callout-info',
                // borderColor: "green",
                style: {
                    spacing: {
                        padding: {
                            top: "var:preset|spacing|x-small",
                            right: "var:preset|spacing|x-small",
                            bottom:"var:preset|spacing|x-small", 
                            left: "var:preset|spacing|x-small"
                        }
                    }
                },
            },
            innerBlocks: [
                [
                    'core/heading',
                    {
                        level: 3,
                        placeholder: 'Heading'
                    } 
                ],
                [
                    'core/paragraph',
                    {
                        placeholder: 'Start writing your story...'
                    } 
                ],
            ]

        }
    );

/**
     * Customize the defauly Media & Text block.
     */
 wp.blocks.registerBlockVariation(
    'core/media-text', 
    {
        name: 'custom-media-text',
        title: 'Media & Text',
        isDefault: true,
        attributes: { 
            mediaPosition: 'right', 
            backgroundColor: 'secondary' 
        },
        innerBlocks: [
            [
                'core/heading',
                {
                    level: 3,
                    placeholder: 'Heading'
                } 
            ],
            [
                'core/paragraph',
                {
                    placeholder: 'Start writing your story...'
                } 
            ],
        ]
    },
);


    /**
     * Disable all unused icon variations in the Social Icons block.
     */
    const unusedSocialIcons = [
        'fivehundredpx',
        'amazon',
        'bandcamp',
        'behance',
        'chain',
        'codepen',
        'deviantart',
        'dribbble',
        'dropbox',
        'etsy',
        'feed',
        'flickr',
        'foursquare',
        'goodreads',
        'google',
        'lastfm',
        'mastodon',
        'meetup',
        'medium',
        'patreon',
        'pinterest',
        'pocket',
        'reddit',
        'skype',
        'snapchat',
        'soundcloud',
        'spotify',
        'telegram',
        'tiktok','tumblr',
        'twitch',
        'vimeo',
        'vk',
        'whatsapp', 
        'yelp', 
    ];
    unusedSocialIcons.forEach( ( icon ) => wp.blocks.unregisterBlockVariation( 'core/social-link', icon ) );


} );

