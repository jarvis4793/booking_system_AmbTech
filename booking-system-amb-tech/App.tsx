import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserBooking from "./pages/UserBooking";
import AllBookings from "./pages/AllBookings";
import UserProfile from "./pages/UserProfile";
import CreateBooking from "./pages/CreateBooking";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Tab = createBottomTabNavigator();

export const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="UserBooking" component={UserBooking} />
            <Tab.Screen name="AllBookings" component={AllBookings} />
            <Tab.Screen name="UserProfile" component={UserProfile} />
            <Tab.Screen name="CreateBooking" component={CreateBooking} />
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
