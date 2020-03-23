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
        lineHeight: 16 * 1.3 + 'px',
        textTransform: 'uppercase'
    },
    font_2: {
        fontFamily: [FontMontserratRegular, "sans-serif"],
        fontSize: 32,
        lineHeight: 32 * 1.3 + 'px',
        textTransform: 'uppercase'
    },
    font_3: {
        fontFamily: [FontMontserratRegular, "sans-serif"],
        fontSize: 14,
        lineHeight: 14 * 1.3 + 'px',
        textTransform: ''
    },
    fontLogo: {
        fontFamily: [FontMontserratBold, "sans-serif"],
        fontSize: 48,
        lineHeight: 48 * 1.3 + 'px',
        textTransform: 'uppercase'
    },
    fontPageMainTitle: {
        fontFamily: [FontMontserratBold, "sans-serif"],
        fontSize: 36,
        lineHeight: 36 * 1.3 + 'px',
        color: '#2c2c2c',

    },
    fontPageTitleLevel2: {
        fontFamily: [FontMontserratBold, "sans-serif"],
        fontSize: 24,
        lineHeight: 24 * 1.3 + 'px',
    },
    fontBody: {
        fontFamily: [FontMontserratRegular, "sans-serif"],
        fontSize: 16,
        lineHeight: 16 * 1.5 + 'px',
    },
    fontTitleItem: {
        fontFamily: [FontMontserratBold, "sans-serif"],
        fontSize: 24,
        lineHeight: 24 * 1.3 + 'px',
    },
    fontFormInput: {
        fontFamily: [FontMontserratRegular, "sans-serif"],
        fontSize: 14,
        lineHeight: 14 * 1.3 + 'px',
    },
    fontformButton: {
        fontFamily: [FontMontserratBold, "sans-serif"],
        fontSize: 14,
        lineHeight: 14 * 1.3 + 'px',
    }
});