import { useQuery } from "@tanstack/react-query";
import { View, Text } from "react-native";
import { fetchPublic } from "../api/fetch";

function BookingDetail({ route }) {
    const {
        data: bookingData,
        isLoading: isBookingGroupData,
        error: errorBookingData,
        refetch,
    } = useQuery({
        queryKey: [`booking/${route.params.booking}`, "get"],
        queryFn: async ({ queryKey }) =>
            await fetchPublic(queryKey[0], queryKey[1]),
    });
    console.log(bookingData);
    return (
        <View className="flex-1 bg-white">
            <Text className="text-2xl">Booking Id: {route.params.booking}</Text>
            <Text className="text-2xl">First name: {bookingData?.firstname}</Text>
            <Text className="text-2xl">Last name: {bookingData?.lastname}</Text>
            <Text className="text-2xl">Total Price: {bookingData?.totalprice}</Text>
            <View>
                <Text className="text-2xl">Booking Dates:</Text>
                <View>
                    <Text className="text-xl">checkin: {bookingData?.bookingdates.checkin}</Text>
                    <Text className="text-xl">checkout: {bookingData?.bookingdates.checkout}</Text>
                </View>
            </View>
            <Text className="text-2xl">Deposit paid: {bookingData?.depositpaid.toString()}</Text>
            <Text className="text-2xl">Additional needs: {bookingData?.additionalneeds}</Text>
        </View>
    );
}

export default BookingDetail;
