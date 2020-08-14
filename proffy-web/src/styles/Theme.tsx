import React from 'react';
import {
    ThemeProvider,
    DefaultTheme,
    TypeFontsFamily,
} from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        colorBackground: '#F0F0F7',
        colorPrimaryLighter: '#9871F5',
        colorPrimaryLight: '#916BEA',
        colorPrimary: '#8257E5',
        colorPrimaryDark: '#774DD6',
        colorPrimaryDarker: '#6842c2',
        colorSecondary: '#04D361',
        colorSecondaryDark: '#04BF58',
        colorTitleInPrimary: '#FFFFFF',
        colorTextInPrimary: '#D4C2FF',
        colorTextTitle: '#32264D',
        colorTextComplement: '#9C98A6',
        colorTextBase: '#6A6180',
        colorLineInWhite: '#E6E6F0',
        colorInputBackground: '#F8F8FC',
        colorButtonText: '#FFFFFF',
        colorBoxBase: '#FFFFFF',
        colorBoxFooter: '#FAFAFC',
        colorSmallInfo: '#C1BCCC',
        colorDanger: '#c53030',
    },
    getFont(type: TypeFontsFamily) {
        return type;
    },
};

const Theme = ({ children }: { children: any }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
