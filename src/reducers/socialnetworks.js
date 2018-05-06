const initialState = [
    {
        id:             '1',
        networkName:    'Vkontakte',
        iconStyleClass: 'icon-vk',
        webPath:        'https://vk.com/',
    },
    {
        id:             '2',
        networkName:    'Instagram',
        iconStyleClass: 'icon-instagram',
        webPath:        'https://www.instagram.com/',
    },
    {
        id:             '3',
        networkName:    'Youtube',
        iconStyleClass: 'icon-youtube',
        webPath:        'https://www.youtube.com/',
    },
    {
        id:             '4',
        networkName:    'Twitter',
        iconStyleClass: 'icon-twitter',
        webPath:        'https://twitter.com',
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