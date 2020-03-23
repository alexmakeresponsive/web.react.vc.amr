const initialState = [
    {
        id:    '2',
        title: 'Skype',
        value: 'alexmakeresponsive',
    },
    {
        id:    '3',
        title: 'E-mail',
        value: 'alexmakeresponsive@mail.ru',
    },
];

export default function reducerContactsItems(state=initialState, action) {
    if (action.type === 'ADD_CONTACTSITEM') {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}