const initialState = [
    {
        id:          '1',
        mainImgSrc:  '/assets/images/works/1/main.png',
        galleryImgSrc:
        [
            '/assets/images/works/1/gallery/1.png',
            '/assets/images/works/1/gallery/2.png',
            '/assets/images/works/1/gallery/3.png',
            '/assets/images/works/1/gallery/4.png',
            '/assets/images/works/1/gallery/5.png',
        ],
        link:        '/work/1/',
        title:       'Craigs WP Template',
        description: 'Create Wordpress template',
        text:        'My work with this project is ...',
    },
    {
        id:          '2',
        mainImgSrc:  '/assets/images/works/2/main.png',
        galleryImgSrc:
        [
            '/assets/images/works/2/gallery/1.png',
            '/assets/images/works/2/gallery/2.png',
            '/assets/images/works/2/gallery/3.png',
            '/assets/images/works/2/gallery/4.png',
            '/assets/images/works/2/gallery/5.png',
        ],
        link:        '/work/2/',
        title:       'Nango WP Template',
        description: 'Create Wordpress template',
        text:        `Creat HTML template use HTML5, CSS3, JS. Create WP template and integration HTML template.
                      Create custom post type, create custom taxonomy`,
    },

    {
        id:          '10',
        mainImgSrc:  '/assets/images/works/10/main.png',
        galleryImgSrc:
        [
            '/assets/images/works/10/gallery/1.png',
            '/assets/images/works/10/gallery/2.png',
            '/assets/images/works/10/gallery/3.png',
            '/assets/images/works/10/gallery/4.png',
            '/assets/images/works/10/gallery/5.png',
            '/assets/images/works/10/gallery/6.png',
            '/assets/images/works/10/gallery/7.png',
        ],
        link:        '/work/10/',
        title:       'TeaShop HTML template',
        description: 'Shop template',
        text:        'My work with this project is ...',
    },
    {
        id:          '4',
        mainImgSrc:  '/assets/images/works/4/main.png',
        galleryImgSrc:
        [
            '/assets/images/works/4/gallery/1.png',
            '/assets/images/works/4/gallery/2.png',
            '/assets/images/works/4/gallery/3.png',
            '/assets/images/works/4/gallery/4.png',
            '/assets/images/works/4/gallery/5.png',
            '/assets/images/works/4/gallery/6.png',
        ],
        link:        '/work/4/',
        title:       'Evenza HTML template',
        description: 'Shop template',
        text:        'My work with this project is ...',
    },
    {
        id:          '5',
        mainImgSrc:  '/assets/images/works/5/main.png',
        galleryImgSrc:
        [
            '/assets/images/works/5/gallery/1.png',
            '/assets/images/works/5/gallery/2.png',
            '/assets/images/works/5/gallery/3.png',
            '/assets/images/works/5/gallery/4.png',
        ],
        link:        '/work/5/',
        title:       'GardenStar HTML template',
        description: 'Blog template',
        text:        'My work with this project is ...',
    },

    {
        id:          '9',
        mainImgSrc:  '/assets/images/works/9/main.png',
        galleryImgSrc:
        [
            '/assets/images/works/9/gallery/1.png',
            '/assets/images/works/9/gallery/2.png',
            '/assets/images/works/9/gallery/3.png',
            '/assets/images/works/9/gallery/4.png',
            '/assets/images/works/9/gallery/5.png',
        ],
        link:        '/work/9/',
        title:       'Schon HTML template',
        description: 'Shop template',
        text:        'My work with this project is ...',
    },
    {
        id:          '7',
        mainImgSrc:  '/assets/images/works/7/main.png',
        galleryImgSrc:
        [

        ],
        link:        '/work/7/',
        title:       'Site about cryptocurrency',
        description: 'Blog template',
        text:        'My work with this project is ...',
    },
    {
        id:          '8',
        mainImgSrc:  '/assets/images/works/8/main.png',
        galleryImgSrc:
        [

        ],
        link:        '/work/8/',
        title:       'PHP mail',
        description: 'Blog template',
        text:        'My work with this project is ...',
    },
    {
        id:          '6',
        mainImgSrc:  '/assets/images/works/6/main.png',
        galleryImgSrc:
        [

        ],
        link:        '/work/6/',
        title:       'ShtabOpmoscow 2018 HTML template',
        description: 'Blog template',
        text:        'My work with this project is ...',
    },
    {
        id:          '3',
        mainImgSrc:  '/assets/images/works/3/main.png',
        galleryImgSrc:
        [

        ],
        link:        '/work/3/',
        title:       'HTML plug',
        description: 'Create for maintenance mode',
        text:        'My work with this project is ...',
    },
    {
        id:          '11',
        mainImgSrc:  '/assets/images/works/11/main.png',
        galleryImgSrc:
        [

        ],
        link:        '/work/11/',
        title:       'WP template',
        description: 'Blog template',
        text:        'My work with this project is ...',
    },
    {
        id:          '12',
        mainImgSrc:  '/assets/images/works/12/main.png',
        galleryImgSrc:
        [

        ],
        link:        '/work/12/',
        title:       'Magento 1 template',
        description: 'Shop template',
        text:        'My work with this project is ...',
    },
    {
        id:          '13',
        mainImgSrc:  '/assets/images/works/13/main.png',
        galleryImgSrc:
        [

        ],
        link:        '/work/13/',
        title:       'White Plains Hospital WP template',
        description: 'Blog template',
        text:        'My work with this project is ...',
    },
    {
        id:          '14',
        mainImgSrc:  '/assets/images/works/14/main.png',
        galleryImgSrc:
        [
            '/assets/images/works/14/gallery/1.png',
            '/assets/images/works/14/gallery/2.png',
            '/assets/images/works/14/gallery/3.png',
            '/assets/images/works/14/gallery/6.png',
        ],
        link:        '/work/14/',
        title:       'Magento 2 template',
        description: 'Shop template',
        text:        'My work with this project is ...',
    },
];

export default function reducerWorks(state=initialState, action) {
    if (action.type === 'ADD_WORK') {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}