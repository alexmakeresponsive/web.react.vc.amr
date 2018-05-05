import { StyleSheet } from 'aphrodite';

export const experienceStyles = StyleSheet.create({
    elList: {
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
    }
});