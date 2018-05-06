import { StyleSheet } from 'aphrodite';

export const contactsStyles = StyleSheet.create({
    title: {
        color: '#2c2c2c',
        textAlign: 'center'
    },
    colTitle: {
        '@media (max-width: 767px)': {
            textAlign: 'center'
        }
    },
    colBody: {
        '@media (max-width: 767px)': {
            display: 'flex',
            justifyContent: 'center'
        }
    },
    itemsWrapp: {
        '@media (max-width: 799px) and (min-width: 768px)': {
            // marginLeft: -15
        }
    }
});