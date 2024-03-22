import { View, Text, Pressable, ScrollView } from "react-native";
import { fetchPublic } from "../api/fetch";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
// import { useIsFocused } from "@react-navigation/native";
import Card from "../components/Card";

function AllBookings({ navigation }: any) {
  const {
    data: allBookingsData,
    isLoading: isAllBookingsData,
    error: errorAllBookingsData,
    refetch,
  } = useQuery({
    queryKey: ["booking", "get"],
    queryFn: async ({ queryKey }) =>
      await fetchPublic(queryKey[0], queryKey[1]),
  });
  console.log(allBookingsData);

  return (
    <ScrollView>
      <View className="flex flex-row flex-wrap justify-between item-start">
        {allBookingsData?.map((allBookingsData: Booking) => (
          <Pressable
            key={allBookingsData.bookingid}
            onPress={() => {
              navigation.navigate("Booking Detail", {
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

export default AllBookings;
