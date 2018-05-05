//skillItemLevel0Value
const initialState = {
    //skillItemLevel1
    adminSkills:
    //skillItemLevel1Value
    {
        title: 'System administration',
        collection:
        [
            //skillItemLevel2
            'Ubuntu',
            'Debian',
            'Fedora',
            'Mac OS X',
        ]
    },
    //skillItemLevel1
    databasesSkills:
    {
        title: 'Databases',
        collection:
        //skillItemLevel1Value
        [
            //skillItemLevel2
            'MySQL'
            //skillItemLevel2Value === skillItemLevel2
        ],
    },
    //skillItemLevel1
    frontendSkills:
    //skillItemLevel1Value
    {
        title: 'Frontend',
        collection: {
            //skillItemLevel2
            markup: {
                title: 'Markup',
                collection:
                //skillItemLevel2Value
                [
                    //skillItemLevel3
                    'HTML5',
                    'CSS3',
                    'LESS',
                    'SASS',
                    'Stylus',
                    'SVG',
                ],
            },
            javascript: {
                title: 'Javascript',
                collection:
                [
                    'AMD',
                    'UMD',
                    'CommonJS',
                    'ES6 modules',
                ]
            }
        }
    },
    envSkills: {
        title: 'Environment',
        collection:
        [
            'Grunt',
            'Gulp',
            'Webpack',
            'Docker'
        ],
    },
    programmLanguafeSkills:
    {
        title: 'Programm languages',
        collection: {
            backend: {
                title: 'Backend',
                collection:
                [
                    'PHP',
                ],
            },
            frontend:
            {
                title: 'Frontend',
                collection:
                [
                    'JavaScript',
                ],
            }
        },
    },
    cmsSkills: {
        title: 'CMS',
        collection:
        [
            'Wordpress',
            'Wordpress + Woocommerce',
            'Magento 1',
            'Magento 2',
            'OpenCart',
        ]
    },
    frameworksSkills: {
        title: 'Frameworks',
        collection:
        [
            'Yii 1',
        ]
    }
    ,
    libsSkills: {
        title: 'Librares',
        collection:
        [
            'NodeJS',
            'ReactJS',
            'RequireJS',
        ]
    }
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