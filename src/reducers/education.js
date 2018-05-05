const initialState = [
    {
        id:          '1',
        school:        'The Siberian State Automobile and Highway University (SibADI)',
        faculty:       'Construction',
        specialty: 'Construction',
        degree: {
            level: 'The Specialist Degree',
            name: 'Construction of unique buildings and structures'
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