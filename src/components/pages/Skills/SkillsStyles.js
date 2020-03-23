import { StyleSheet } from 'aphrodite';

export const skillsStyles = StyleSheet.create({
    title: {

    },
    skillPill: {
        display: 'inline-block',
        padding: '5px 10px',
        backgroundColor: '#fc6f5c',
        color: 'white',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10
    },
    skillItemsWrapper: {
        marginBottom: -30,
        textAlign: 'center',
    },
    skillItemsLevel0: {

    },
    skillItemsLevel1: {
        paddingLeft: 0,
        borderTop: '1px solid #aeaeae',
        borderBottom: '1px solid #aeaeae',
        paddingBottom: 20,
        marginBottom: 30
    },
    skillItemsLevel2: {
        paddingLeft: 0,
        // marginTop: '-15px'
    },

    skillTitleLevel1: {
        display: 'block',
        padding: '25px 0px'
    },
    skillTitleLevel2: {
        display: 'block',
        padding: '15px 0px'
    }
});