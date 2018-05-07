import { StyleSheet } from 'aphrodite';

export const worksStyles = StyleSheet.create({
    title: {

    },
    formWrapper: {
        display: 'flex',
        justifyContent: 'center',
        // paddingTop: '15px',
        paddingBottom: '30px',

        '@media (max-width: 420px)': {
            flexDirection: 'column',
            alignItems: 'center'
        },
    },
    itemWrapper: {
        textAlign: 'center',
        marginBottom: 45
    },
    itemsWrapper: {
        marginBottom: -45,
        overflow: 'hidden'
    },
    imgWrapper: {
        overflow: 'hidden',
        height: 290,
        marginBottom: 15,

        '@media (max-width: 1199px)': {
            height: 260,
        },
        '@media (max-width: 991px)': {
            height: 260,
        },
        '@media (max-width: 767px)': {
            height: 590,
        },
        '@media (max-width: 727px)': {
            height: 490,
        },
        '@media (max-width: 627px)': {
            height: 390,
        },
        '@media (max-width: 527px)': {
            height: 290,
        },
        '@media (max-width: 367px)': {
            height: 250,
        },
    },
    img: {
       width: '100%'
    },
    inputSearch: {
        marginRight: 30,

        '@media (max-width: 420px)': {
            marginRight: 0,
            marginBottom: 30,
            width: '100%'
        },
    }
});