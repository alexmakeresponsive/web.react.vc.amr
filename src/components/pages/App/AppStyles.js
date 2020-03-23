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
    componentBody: {
        overflow: 'hidden',
        paddingBottom: '30px'
    },
    lastParagraphsClean: {
        marginBottom: '-15px'
    },
    contentCol: {
        paddingTop: '45px'
    }
});

export const logoStyles = StyleSheet.create({
    logoWrapp: {
        display: 'flex',
        width: '320px',
        textAlign: 'justify',
        color: 'inherit',
        textDecoration: 'none'
    }
});


export const formStyles = StyleSheet.create({
    input: {
        padding: 15,
    },
    inputInline: {
        padding: 15,
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


export const textStyles = StyleSheet.create({
    titleCenter: {
        display: 'block',
        textAlign: 'center',
        padding: '15px 0px',
        paddingTop: '45px'
    },
    underTitle: {
        disolay: 'block'
    },
    paragraphCenter: {
        display: 'block',
        textAlign: 'center',
        marginBottom: '15px'
    },
    titleLevel2: {
        display: 'block',
        marginBottom: '15px'
    },
    list: {
        marginBottom: '-15px'
    },
    listItem: {
        display: 'block',
        marginBottom: '15px'
    }
});


