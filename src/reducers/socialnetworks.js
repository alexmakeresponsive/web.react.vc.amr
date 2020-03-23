const initialState = [
    {
        id:             '1',
        networkName:    'Vkontakte',
        iconStyleClass: 'icon-vk',
        webPath:        'https://vk.com/id37858560',
    },
    {
        id:             '3',
        networkName:    'Youtube',
        iconStyleClass: 'icon-youtube',
        webPath:        'https://www.youtube.com/channel/UCCQz7m1Yk2L4dZG0t7xjvQA',
    },
];

export default function reducerSocialNetworks(state=initialState, action) {
    if (action.type === 'ADD_SOCIALNETWORK') {
        return [
            ...state,
            action.payload
        ]
    }

    return state;
}