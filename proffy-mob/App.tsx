import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import {
    Archivo_400Regular,
    Archivo_700Bold,
    useFonts,
} from '@expo-google-fonts/archivo';
import {
    Poppins_400Regular,
    Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import Theme from './src/styles/Theme';
import AppStackRoutes from './src/routes/appStack';

const App: React.FC = () => {
    const [fontsLoad] = useFonts({
        Archivo_400Regular,
        Archivo_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold,
    });

    if (!fontsLoad) return <AppLoading />;

    return (
        <Theme>
            <AppStackRoutes />
            <StatusBar style="light" />
        </Theme>
    );
};

export default App;
