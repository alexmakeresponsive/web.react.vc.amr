const initialState = [
    {
        id:        '1',
        school:    'The Siberian State Automobile and Highway University',
        faculty:   'Engineering and construction institute',
        specialty: 'Industrial and civil construction',
        degree:
        {
            level: '',
            name:  'Specialist for Research and design of buildings'
        }
    },
];

export default function reducerEducation(state=initialState, action) {
    if (action.type === 'ADD_EDUCATION') {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}