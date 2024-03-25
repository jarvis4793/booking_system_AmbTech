import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserBooking from "./pages/UserBooking";
import UserProfile from "./pages/UserProfile";
import CreateBooking from "./pages/CreateBooking";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookingDetail from "./pages/BookingDetail";
import AllBookings from "./pages/AllBookings";
import UserBookingDetail from "./pages/UserBookingDetail";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AllBookingsPageGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="All Bookings list"
        component={AllBookings}
      />
      <Stack.Screen
        name="Booking Detail"
        component={BookingDetail}
      />
    </Stack.Navigator>
  );
};

const UserBookingsPageGroup = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User Bookings list"
        component={UserBooking}
      />
      <Stack.Screen
        name="User Booking Detail"
        component={UserBookingDetail}
      />
    </Stack.Navigator>
  );
};



export const queryClient = new QueryClient();

export default function App() {
  return (

    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="All User Bookings" component={UserBookingsPageGroup} options={{ headerShown: false }} />
            <Tab.Screen name="All Bookings" component={AllBookingsPageGroup} options={{ headerShown: false }} />
            <Tab.Screen name="User Profile" component={UserProfile} />
            <Tab.Screen name="Create Booking" component={CreateBooking} />
          </Tab.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
