import { StyleSheet } from 'aphrodite';

export const skillsStyles = StyleSheet.create({
    title: {
        color: '#2c2c2c',
        textAlign: 'center'
    },
    skillPill: {
        display: 'inline-block',
        padding: '5px 10px',
        backgroundColor: '#fc6f5c',
        color: 'white',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5
    },
    skillItemsLevel0: {
        textAlign: 'center',
        marginBottom: 30
    },
    skillItemsLevel1: {
        paddingLeft: 0,
        borderTop: '1px solid #aeaeae',
        borderBottom: '1px solid #aeaeae',
        paddingBottom: 20,
        marginBottom: 30
    },
    skillItemsLevel2: {
        paddingLeft: 0
    }
});