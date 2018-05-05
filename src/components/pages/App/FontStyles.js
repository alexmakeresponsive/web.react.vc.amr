import { StyleSheet } from 'aphrodite';

const FontMontserratRegular = {
    fontFamily: "Montserrat-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    // src: "url('Montserrat-Regular.woff') format('woff')"
    // src: "url('./Montserrat-Regular.woff') format('woff')"
};

const FontMontserratBold = {
    fontFamily: "Montserrat-Bold",
    fontStyle: "normal",
    fontWeight: "normal",
};

export default StyleSheet.create({
    font_1: {
        fontFamily: [FontMontserratRegular, "sans-serif"],
        fontSize: 16,
        textTransform: 'uppercase'
    },
    font_2: {
        fontFamily: [FontMontserratRegular, "sans-serif"],
        fontSize: 32,
        textTransform: 'uppercase'
    },
    fontPageMainTitle: {
        fontFamily: [FontMontserratBold, "sans-serif"],
        fontSize: 36,
    },
    fontPageTitleLevel2: {
        fontFamily: [FontMontserratBold, "sans-serif"],
        fontSize: 24,
    },
    fontBody: {
        fontFamily: [FontMontserratRegular, "sans-serif"],
        fontSize: 16,
    },
    fontTitleItem: {
        fontFamily: [FontMontserratBold, "sans-serif"],
        fontSize: 24,
    },
    fontFormInput: {
        fontFamily: [FontMontserratRegular, "sans-serif"],
        fontSize: 14,
        lineHeight: '24px'
    },
    fontformButton: {
        fontFamily: [FontMontserratBold, "sans-serif"],
        fontSize: 14,
        lineHeight: '24px'
    }
});