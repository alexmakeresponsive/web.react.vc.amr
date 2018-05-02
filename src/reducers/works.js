const initialState = [
    {
        id:          '1',
        link:        '/work/1/',
        title:       'Title 1',
        description: 'Some description 1'
    },
    {
        id:          '2',
        link:        '/work/2/',
        title:       'Title 2',
        description: 'Some description 2'
    },
    {
        id:          '3',
        link:        '/work/3/',
        title:       'Title 3',
        description: 'Some description 3'
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