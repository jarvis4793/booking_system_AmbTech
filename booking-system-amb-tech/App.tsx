import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserBooking from './Pages/UserBooking';
import AllBookings from './Pages/AllBookings';
import UserProfile from './Pages/UserProfile';
import CreateBooking from './Pages/CreateBooking';
import { Provider } from 'react-redux';
import { store } from './store/store';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="UserBooking" component={UserBooking} />
          <Tab.Screen name="AllBookings" component={AllBookings} />
          <Tab.Screen name="UserProfile" component={UserProfile} />
          <Tab.Screen name="CreateBooking" component={CreateBooking} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
