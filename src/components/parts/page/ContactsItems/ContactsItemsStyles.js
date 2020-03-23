import { StyleSheet } from 'aphrodite';

export const contactsItemsStyles = StyleSheet.create({

    contactsPills: {
        display: 'inline-block',
        padding: '2px 10px',
        backgroundColor: '#aeaeae',
        lineHeight: '24px'
    },
    contacts: {
        // lineHeight: '32px',

        '@media (max-width: 767px)': {
            textAlign: 'center'
        }
    },
    contactsList: {
        // marginBottom: 30,
        paddingLeft: '15px',

        '@media (max-width: 767px)': {
            listStyle: 'none',
            paddingLeft: '0px',
        }
    },
    col1: {
        paddingRight: 15
    }
});