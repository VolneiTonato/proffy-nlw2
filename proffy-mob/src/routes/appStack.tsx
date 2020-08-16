import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LadingPage from '../pages/Landing';
import GiveClassesPage from '../pages/GiveClasses';
import StudyTabsPage from './studyTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Landing" component={LadingPage} />
                <Screen name="GiveClasses" component={GiveClassesPage} />
                <Screen name="Study" component={StudyTabsPage} />
            </Navigator>
        </NavigationContainer>
    );
};

export default AppStack;
