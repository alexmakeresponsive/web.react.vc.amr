import { StyleSheet } from 'aphrodite';




export const appStyles = StyleSheet.create({
    lists: {
        padding: 0,
    },
    inps: {
        display: 'inline-block',
        width: '300px',
        height: '45px',
        lineHeight: '45px',
        padding: '0px',
    },
    btns: {
        display: 'inline-block',
        width: '100px',
        height: '49px',
        lineHeight: '45px',
    },
    links: {
        color: 'inherit',
        textDecoration: 'none'
    },
    logo: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '15px',
    },

    elBlock: {
        display: 'block'
    },
    elInlineBlock: {
        display: 'inline-block'
    },
    textCenter: {
        textAlign: 'center'
    },
    col: {
        // paddingLeft: '1rem !important',
        // paddingRight: '1rem !important'
    },
    container: {
        paddingLeft: '15px',
        paddingRight: '15px'
    },

});

export const logoStyles = StyleSheet.create({
    before: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    logoBody: {
        textAlign: 'center',
        paddingLeft: '15px',
        paddingRight: '15px',
    },
    after: {

    },

});

export const navStyles = StyleSheet.create({


});

export const formStyles = StyleSheet.create({
    input: {
        padding: 15,
    },
    inputInline: {
        padding: 15,
        marginRight: 30,
        backgroundColor: '#f6f6f6',
        color: '#35353c',
        border: 'none'
    },
    button: {
        padding: 15,
        border: 'none',
        backgroundColor: '#fc6f5c',
        color: 'white'
    }
});