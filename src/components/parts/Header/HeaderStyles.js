import { StyleSheet } from 'aphrodite';

export const headerStyles = StyleSheet.create({
    header: {
        backgroundColor: '#2c2c2c',
        color: 'white',
        padding: '15px 0px'
    },
    headerRow: {
        overflow: 'hidden'
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginRight: '-15px',
        height: '100%',

        '@media (max-width: 991px)': {
            marginRight: '0px',
        },

        '@media (max-width: 420px)': {
            display: 'block',
            textAlign: 'center'
        }

    },
    navLinks: {
        padding: '15px',

        '@media (max-width: 420px)': {
            display: 'block',
        }
    },
    logoWrapp: {
        // marginLeft: '-15px',

        '@media (max-width: 991px)': {
            marginLeft: '0px',
        },
        '@media (max-width: 420px)': {
            width: 290
        },
    },
    fontLogo: {
        '@media (max-width: 420px)': {
            fontSize: 36,
            textAlign: 'center'
        },
    },
    col1Container: {
        display: 'flex',
        justifyContent: 'center'
        // '@media (max-width: 991px)': {
        // },
    },
    col2Container: {
        height: '100%',

        '@media (max-width: 991px)': {
            display: 'flex',
            justifyContent: 'center'
        }
    }
});