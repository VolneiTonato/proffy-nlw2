import { StyledComponent } from 'styled-components';

declare module 'styled-components' {
    export type TypeFontsFamily =
        | 'Poppins'
        | 'Archivo'
        | 'Roboto'
        | 'sans-serif';

    export interface DefaultTheme {
        colors: {
            colorBackground: string;
            colorPrimaryLighter: string;
            colorPrimaryLight: string;
            colorPrimary: string;
            colorPrimaryDark: string;
            colorPrimaryDarker: string;
            colorSecondary: string;
            colorSecondaryDark: string;
            colorTitleInPrimary: string;
            colorTextInPrimary: string;
            colorTextTitle: string;
            colorTextComplement: string;
            colorTextBase: string;
            colorLineInWhite: string;
            colorInputBackground: string;
            colorButtonText: string;
            colorBoxBase: string;
            colorBoxFooter: string;
            colorSmallInfo: string;
            colorDanger: string;
        };
        getFont(type: TypeFontsFamily): TypeFontsFamily;
    }
}
