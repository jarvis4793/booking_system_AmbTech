import { useQuery } from "@tanstack/react-query";
import { View, Text, ScrollView, Pressable } from "react-native";
import { fetchPublic } from "../api/fetch";
import { useSelector } from "react-redux";
import { UserState } from "../store/store";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import Card from "../components/Card";

function UserBooking({ navigation }) {
  const isFocused = useIsFocused();
  const firstName = useSelector((state: UserState) => state.firstName);
  const lastName = useSelector((state: UserState) => state.lastName);

  const {
    data: userBookingsData,
    isLoading: isUserBookingsData,
    error: errorUserBookingsData,
    refetch,
  } = useQuery({
    queryKey: [`booking?firstname=${firstName}&lastname=${lastName}`, "get"],
    queryFn: async ({ queryKey }) =>
      await fetchPublic(queryKey[0], queryKey[1]),
  });
  console.log(userBookingsData);
  useEffect(() => {
    refetch()
  }, [userBookingsData, isFocused])
  return (
    <ScrollView>
      <View className="flex flex-row flex-wrap justify-between item-start">
        {userBookingsData?.map((allBookingsData: Booking) => (
          <Pressable
            key={allBookingsData.bookingid}
            onPress={() => {
              navigation.navigate("User Booking Detail", {
                booking: allBookingsData.bookingid,
              });
            }}
          >
            <Card bookingid={allBookingsData.bookingid} />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

export default UserBooking;
