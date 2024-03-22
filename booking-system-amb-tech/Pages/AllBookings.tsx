import { View, Text, Pressable, ScrollView } from "react-native";
import { fetchPublic } from "../api/fetch";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import Card from "../components/Card";

type Booking = {
    bookingid: number;
};

function AllBookings({ navigation }: any) {
    const {
        data: bookingData,
        isLoading: isBookingGroupData,
        error: errorBookingData,
        refetch,
    } = useQuery({
        queryKey: ["booking", "get"],
        queryFn: async ({ queryKey }) =>
            await fetchPublic(queryKey[0], queryKey[1]),
    });
    console.log(bookingData);

    return (
        <ScrollView>
            <View className="flex flex-row flex-wrap justify-center">
                {bookingData?.map((bookingData: Booking) => (
                    <Card key={bookingData.bookingid} bookingid={bookingData.bookingid} />
                ))}
            </View>
        </ScrollView>
    );
}

export default AllBookings;
