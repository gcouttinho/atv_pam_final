// IMPORTANDO A NAVEGAÇÃO
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


import Login from "./src/screens/Login";
import CreateUser from "./src/screens/CreateUser"
import Feed from "./src/screens/Feed"
import Home from "./src/screens/Home";
import Categorias from "./src/screens/Categorias";
import DrawerMenu from "./src/DrawerMenu/DrawerMenu";
import { colors } from "./src/styles/variables";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
      >
        <Stack.Screen
          name='Login'
          component={Login}
          options={{
            title: "FAÇA SEU LOGIN OU CRIE UMA CONTA",
            headerStyle: {
              backgroundColor: colors.light3,
            },
          }}
        />
        <Stack.Screen
          name='Feed'
          component={Feed}
        />

        <Stack.Screen
          name='CreateUser'
          component={CreateUser}
          options={{
            title: "CRIE SUA CONTA",
            headerStyle: {
              backgroundColor: colors.light3,
            },
          }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='Categorias'
          component={Categorias}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='DrawerMenu'
          component={DrawerMenu}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

