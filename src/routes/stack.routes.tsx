import { createStackNavigator } from '@react-navigation/stack';
import { AddPage } from '../pages/AddPage';
import { HomePage } from '../pages/Home';

export const StackRoutes = () => {

   const Stack = createStackNavigator();

   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name='Home' component={HomePage} />
         <Stack.Screen name='AddPage' component={AddPage} />
      </Stack.Navigator>
   );
} 
