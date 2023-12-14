// IMPORTAÇÕES DO DRAWER MENU

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

// IMPORTAÇÕES DE TELAS

import Feed from '../screens/Feed';
import Categorias from '../screens/Categorias';
import Home from "../screens/Home";

// CRIAÇÃO DO DRAWER MENU

const Drawer = createDrawerNavigator();

// CRIAÇÃO DO COMPONENTE DRAWER MENU

export default function MyDrawer() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen
                name="Home"
                component={Home}
                options={
                    {
                        title: 'Home',
                    }
                }
            />
            <Drawer.Screen
                name="Feed"
                component={Feed}
                options={
                    {
                        title: 'Feed',
                    }
                }
            />
            <Drawer.Screen
                name="Categorias"
                component={Categorias}
                options={
                    {
                        title: 'Categorias',
                    }
                }
            />
        </Drawer.Navigator>
    );
}
