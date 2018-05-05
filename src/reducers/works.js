const initialState = [
    {
        id:          '1',
        mainImgSrc:  '/assets/images/works/1/main.png',
        link:        '/work/1/',
        title:       'Craigs WP Template',
        description: 'Create Wordpress template'
    },
    {
        id:          '2',
        mainImgSrc:  '/assets/images/works/2/main.png',
        link:        '/work/2/',
        title:       'Nango WP Template',
        description: 'Create Wordpress template'
    },

    {
        id:          '10',
        mainImgSrc:  '/assets/images/works/10/main.png',
        link:        '/work/10/',
        title:       'TeaShop HTML template',
        description: 'Shop template'
    },
    {
        id:          '4',
        mainImgSrc:  '/assets/images/works/4/main.png',
        link:        '/work/4/',
        title:       'Evenza HTML template',
        description: 'Shop template'
    },
    {
        id:          '5',
        mainImgSrc:  '/assets/images/works/5/main.png',
        link:        '/work/5/',
        title:       'GardenStar HTML template',
        description: 'Blog template'
    },

    {
        id:          '9',
        mainImgSrc:  '/assets/images/works/9/main.png',
        link:        '/work/9/',
        title:       'Schon HTML template',
        description: 'Shop template'
    },
    {
        id:          '7',
        mainImgSrc:  '/assets/images/works/7/main.png',
        link:        '/work/7/',
        title:       'Site about cryptocurrency',
        description: 'Blog template'
    },
    {
        id:          '8',
        mainImgSrc:  '/assets/images/works/8/main.png',
        link:        '/work/8/',
        title:       'PHP mail',
        description: 'Blog template'
    },
    {
        id:          '6',
        mainImgSrc:  '/assets/images/works/6/main.png',
        link:        '/work/6/',
        title:       'ShtabOpmoscow 2018 HTML template',
        description: 'Blog template'
    },
    {
        id:          '3',
        mainImgSrc:  '/assets/images/works/3/main.png',
        link:        '/work/3/',
        title:       'HTML plug',
        description: 'Create for maintenance mode'
    },
    {
        id:          '11',
        mainImgSrc:  '/assets/images/works/11/main.png',
        link:        '/work/11/',
        title:       'WP template',
        description: 'Blog template'
    },
    {
        id:          '12',
        mainImgSrc:  '/assets/images/works/12/main.png',
        link:        '/work/12/',
        title:       'Magento 1 template',
        description: 'Shop template'
    },
    {
        id:          '13',
        mainImgSrc:  '/assets/images/works/13/main.png',
        link:        '/work/13/',
        title:       'White Plains Hospital WP template',
        description: 'Blog template'
    },
    {
        id:          '14',
        mainImgSrc:  '/assets/images/works/14/main.png',
        link:        '/work/14/',
        title:       'Magento 2 template',
        description: 'Shop template'
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