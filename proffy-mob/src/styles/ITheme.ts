import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
    export type TypeFontsFamily =
        | 'Archivo_400Regular'
        | 'Archivo_700Bold'
        | 'Poppins_400Regular'
        | 'Poppins_600SemiBold';

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
