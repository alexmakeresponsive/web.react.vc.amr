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
                        'NGINX',
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
                    'SQL', 'PHP', 'JavaScript'
                ],
            },
            configuration: {
                title: 'Configuration',
                collection:
                //skillItemLevel2Value
                    [
                        //skillItemLevel3
                        'XML',
                        'YAML',
                    ],
            },
            templateEngines: {
                title: 'Template Engines',
                collection:
                    [
                        'Smarty', 'EJS'
                    ]
            },
            libs: {
                title: 'Libraries',
                collection:
                    [
                        'DB Simple',
                        'PHP Mailer',
                        'Axios',
                        'Cors',
                        'Mongoose',
                        'Body parser'
                    ]
            },
            frameworks: {
                title: 'Frameworks',
                collection:
                    [
                        'Yii 1',
                        'Codeigniter',
                        'Express'
                    ]
            },
            databases: {
                title: 'Databases',
                collection:
                    [
                        'MySQL',
                        'MongoDB',
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
                    'XHTML',
                ],
            },
            configuration: {
                title: 'Configuration',
                collection:
                //skillItemLevel2Value
                    [
                        //skillItemLevel3
                        'JSON',
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
                        'PostCSS'
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
            templateEngines: {
                title: 'Template Engines',
                collection:
                    [
                        'Mustache', 'Hogan', 'Handlebars'
                    ]
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
                    'Microevent',
                    'Lodash',
                    'Prototype',
                    'Knockout',
                    'React',
                    'React Router',
                    'Reactstrap',
                    'React Bootstrap',
                    'Redux',
                    'Flux',
                    'Aphroditejs'
                ]
            },
            libscss: {
                title: 'JavaScript and CSS libraries',
                collection:
                [
                    'Bootstrap 3',
                    'Bootstrap 4',
                    'Semantic UI',
                    'UIKIT',
                    'Materialize',
                    'LostGrid',
                    'S-grid',
                    'Textillate',
                ]
            },
            frameworks: {
                title: 'Frameworks',
                collection:
                    [
                        'Nextjs'
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
                    'Browserify',
                    'RequireJS',
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
            // 'OpenCart',
        ]
    },
    apiSkills: {
        title: 'API',
        collection:
        [
            'YouTube',
            'Google Maps',
            'Twitter',
            'VK',
            'Telegram'
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