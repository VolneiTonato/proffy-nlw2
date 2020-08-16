import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FavoritesPage from '../pages/Favorites';
import TeacherListPage from '../pages/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();

const colorSelected = '#8257E5';

const StudyTabs: React.FC = () => {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    height: 20,
                    width: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        >
            <Screen
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons
                            name="ios-easel"
                            color={focused ? colorSelected : color}
                            size={size}
                            focused={focused}
                        />
                    ),
                }}
                name="TeacherList"
                component={TeacherListPage}
            />
            <Screen
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, focused, size }) => (
                        <Ionicons
                            name="ios-heart"
                            color={focused ? colorSelected : color}
                            size={size}
                            focused={focused}
                        />
                    ),
                }}
                name="Favorites"
                component={FavoritesPage}
            />
        </Navigator>
    );
};

export default StudyTabs;
