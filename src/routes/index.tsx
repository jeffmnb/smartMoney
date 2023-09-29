import { NavigationContainer } from '@react-navigation/native';
import { Load } from '../components/Load';
import { theme } from '../theme';
import { StackRoutes } from './stack.routes';

export const Routes = () => {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}