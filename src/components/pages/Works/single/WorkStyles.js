import { StyleSheet } from 'aphrodite';

export const workStyles = StyleSheet.create({
    itemsWrapper: {
        paddingTop: 30,
        marginBottom: -30
    },
    itemWrapper: {
        textAlign: 'center',
        marginBottom: 30
    },
    imgWrapper: {
        overflow: 'hidden',
        height: 290,
        // border: '1px solid #000000',

        '@media (max-width: 1199px)': {
            height: 260,
        },
        '@media (max-width: 991px)': {
            height: 390,
        },

        '@media (max-width: 740px)': {
            height: 350,
        },
        '@media (max-width: 660px)': {
            height: 310,
        },
        '@media (max-width: 600px)': {
            height: 260,
        },
        '@media (max-width: 500px)': {
            height: 220,
        },
        '@media (max-width: 420px)': {
            height: 160,
        },
    },
    img: {
        width: '100%'
    },
});