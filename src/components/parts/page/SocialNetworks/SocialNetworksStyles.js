import { StyleSheet } from 'aphrodite';

export const socialNetworks = StyleSheet.create({
    item: {
        display: 'inline-block',
        marginLeft: 7.5,
        marginRight: 7.5,
        backgroundColor: '#2c2c2c',
        width:  64,
        height: 64,

        '@media (max-width: 767px)': {
            marginBottom: 10
        }
    },
    itemsWrapper: {
        marginLeft: -7.5,

        '@media (max-width: 767px)': {
            textAlign: 'center'
        }
    },
    componentWrapper: {
        overflow: 'hidden'
    },
    icon: {
        display: 'block',
        transform: 'scale(.16)',
        transformOrigin: '14px 13px',
    }
});