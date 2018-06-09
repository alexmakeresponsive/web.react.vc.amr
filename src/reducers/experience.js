const initialState = [
    {
        id:          '1',
        function:    'Engineer-Designer of Construction',
        period:      'september 2010 - november 2010, OmZm-Project(Omsk)',
        description: 'Create plans and schemes of Steel and Concrete construction',

    },
    {
        id:          '2',
        function:    'Surveillance Engineer ',
        period:      'febrary 2011 - febrary 2012, Mostovik(Sochi)',
        description: "Author's supervision of the executed works.",

    },
    {
        id:          '3',
        function:    'Engineer-Designer of Construction',
        period:      'march 2012 - march 2014, Mostovik(Vladivistok)',
        description: "Create plans and schemes of Steel and Concrete construction. Author's supervision of the executed works.",

    },
    {
        id:          '4',
        function:    'Engineer-Designer of Construction',
        period:      'march 2014 - march 2016, Couldy Project(Moscow)',
        description: "Create plans and schemes of Steel and Concrete construction. Author's supervision of the executed works.",

    },
    {
        id:          '5',
        function:    'Frontend-developer',
        period:      'march 2016, Freelance(Omsk)',
        description: `Development of business card websites (Wordpress, Codeigniter) 
                        and online stores (Wordpress, OpenCart, Magento). 
                        Redesign (change of layout on ready design) and support of sites (work with content).
                        Create HTML layouts mostly`,

    },
];

export default function reducerExperience(state=initialState, action) {
    if (action.type === 'ADD_EXPERIENCE') {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}