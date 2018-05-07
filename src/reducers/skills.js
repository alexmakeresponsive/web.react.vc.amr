//skillItemLevel0Value
const initialState = {
    //skillItemLevel1
    webEnironment:
    //skillItemLevel1Value
    {
        title: 'Web Environment',
        collection: {
            os:
            {
                title: 'Operating systems',
                collection:
                    [
                        //skillItemLevel2
                        'Ubuntu',
                        'Debian',
                        'Fedora',
                        'Mac OS X',
                    ]
            },
            vs:
            {
                title: 'Virtualization systems',
                collection:
                    [
                        //skillItemLevel2
                        'Vagrant',
                        'Docker',
                    ]
            },
            webServers:
            {
                title: 'Web servers',
                collection:
                    [
                        //skillItemLevel2
                        'Apache',
                    ]
            },
            versionControlSystems: {
                title: 'Version control systems',
                collection:
                    [
                        'Git',
                    ],
            },
            dbManagement: {
                title: 'Management database apps',
                collection:
                    [
                        'Adminer', 'PHPMyAdmin', 'DBeaver', 'MySQL Workbench', 'Navicat'
                    ],
            },
            versionControlPrograms: {
                title: 'Version control apps',
                collection:
                    [
                        'Github Desktop', 'Sourcetree',
                    ],
            },
            graphicProgramms: {
                title: 'Graphic apps',
                collection:
                    [
                        'Adobe PhotoShop', 'Adobe Illustrator', 'Sketch',
                    ],
            },
        }
    },
    //skillItemLevel1
    backendSkills:
    //skillItemLevel1Value
    {
        title: 'Backend',
        collection: {
            //skillItemLevel2
            languages: {
                title: 'Languages',
                collection:
                //skillItemLevel2Value
                [
                    //skillItemLevel3
                    'SQL', 'PHP',
                ],
            },
            templateEngines: {
                title: 'Template Engines',
                collection:
                    [
                        'Smarty',
                    ]
            },
            libs: {
                title: 'Libraries',
                collection:
                    [
                        'DB Simple',
                        'PHP Mailer',
                    ]
            },
            frameworks: {
                title: 'Frameworks',
                collection:
                    [
                        'Yii 1',
                        'Codeigniter',
                    ]
            }
        }
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
                ],
            },
            //skillItemLevel2
            styles: {
                title: 'Styles',
                collection:
                //skillItemLevel2Value
                    [
                        //skillItemLevel3
                        'CSS3',
                        'LESS',
                        'SASS',
                        'Stylus',
                    ],
            },
            //skillItemLevel2
            languages: {
                title: 'Languages',
                collection:
                //skillItemLevel2Value
                    [
                        //skillItemLevel3
                        'JavaScript',
                    ],
            },
            module: {
                title: 'Module patterns',
                collection:
                [
                    'AMD',
                    'UMD',
                    'CommonJS',
                    'ES6 modules',
                ]
            },
            libsjs: {
                title: 'JavaScript libraries',
                collection:
                [
                    'jQuery',
                    'Lodash',
                    'Underscore',
                    'Prototype',
                    'Knockout',
                    'RequireJS',
                    'React',
                ]
            },
            libscss: {
                title: 'JavaScript and CSS libraries',
                collection:
                [
                    'Bootstrap 3',
                    'Bootstrap 4',
                    'Semantic UI',
                ]
            },
            taskRunners: {
                title: 'Task runners',
                collection:
                [
                    'Grunt',
                    'Gulp',
                ]
            },
            bundlers: {
                title: 'Bundlers',
                collection:
                [
                    'Webpack',
                ]
            }
        }
    },
    cmsSkills: {
        title: 'CMS',
        collection:
        [
            'Wordpress',
            'Magento 1',
            'Magento 2',
            'OpenCart',
        ]
    },
    apiSkills: {
        title: 'API',
        collection:
        [
            'YouTube',
            'Google Maps',
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