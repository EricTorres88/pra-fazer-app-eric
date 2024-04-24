import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login'
import CreateUser from './src/screens/CreateUser'
import About from './src/screens/About/index'
import Tasks from './src/screens/Tasks/index'
import Account from './src/screens/Account/index'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Tabs" //Abri a página inicial
            screenOptions={{ //Aplica o estilo na barra de navegação
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: '#F60'},
                headerTintColor: '#FFF',
            }}
            > 

                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

                <Stack.Screen name="CreateUser" component={CreateUser} 
                options={{title: 'Cadastro de Usuário'}} />

                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Cria o menu do rodapé do aplicativo
function Tabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Tasks" component={Tasks} options={{
                title: 'Tarefas'
            }} />

            <Tab.Screen name="Account" component={Account} options={{
                title: 'Dados do Usuário'
            }} />

            <Tab.Screen name="About" component={About} options={{
                title: 'Sobre o Aplicativo'
            }} />
        </Tab.Navigator>
    );
}