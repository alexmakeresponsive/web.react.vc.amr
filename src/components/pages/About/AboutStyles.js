import { StyleSheet } from 'aphrodite';

export const aboutStyles = StyleSheet.create({
    list: {
        padding: '0px 40px'
    },
    listItem: {
        listStyle: 'none',
        position: 'relative',

        ':before': {
            position: 'absolute',
            left: -40,
            content: '""',
            width: 20,
            height: 20,
            backgroundColor: '#fc6f5c'
        },
    },
    listItemPeriod: {
        display: 'block',
        paddingTop:    '3px',
        paddingBottom: '7px',
        color: '#aeaeae'
    },

    listItemSchool: {
        display: 'block',
        paddingTop:    '3px',
        paddingBottom: '7px',
        color: '#aeaeae'
    },

});