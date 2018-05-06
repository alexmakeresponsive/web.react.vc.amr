const initialState = [
    {
        id:    '1',
        title: 'Telegram',
        value: 'musthaveresponsive',
    },
    {
        id:    '2',
        title: 'Skype',
        value: 'musthaveresponsive',
    },
    {
        id:    '3',
        title: 'E-mail',
        value: 'musthaveresponsive@yandex.ru',
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