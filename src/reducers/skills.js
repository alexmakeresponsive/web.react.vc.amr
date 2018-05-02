const initialState = {
        adminSkills:            [
            'Ubuntu',
            'Debian',
            'Fedora',
            'Mac OS X',
            'Windows',
        ],
        backendSkills:          [
            'MySQL'
        ],
        frontendSkills:         {
            markup: [
                'HTML5',
                'CSS3',
                'LESS',
                'SASS',
                'Stylus',
                'SVG',
            ],
            javascript: [
                'AMD',
                'UMD',
                'CommonJS',
                'ES6 modules',
            ]
        },
        envSkills: [
            'Grunt',
            'Gulp',
            'Webpack',
        ],
        programmLanguafeSkills: {
            backend: [
                'PHP',
            ],
            frontend: [
                'JavaScript'
            ]
        },
        cmsSkills: [
            'Wordpress',
            'Wordpress + Woocommerce',
            'Magento 1',
            'Magento 2',
            'OpenCart',
        ],
        frameworksSkills: [
            'Yii 1',
        ],
        libsSkills: [
            'NodeJS',
            'ReactJS',
            'RequireJS',
        ]
};


//This is reducer
export default function reducerSkills(state=initialState, action) {
    if (action.type === 'ADD_SKILL') {
        return {
            ...state,
            skillName: {

            }
        }
    }

    return state;
}