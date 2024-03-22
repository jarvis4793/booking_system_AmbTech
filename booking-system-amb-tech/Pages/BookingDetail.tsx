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
    <View>
      <Text>Booking Id: {route.params.booking}</Text>
      <Text>First name: {bookingData.firstname}</Text>
      <Text>Last name: {bookingData.lastname}</Text>
      <Text>Total Price: {bookingData.totalprice}</Text>
      <View>
        <Text>Booking Dates:</Text>
        <View>
          <Text>checkin: {bookingData.bookingdates.checkin}</Text>
          <Text>checkout: {bookingData.bookingdates.checkout}</Text>
        </View>
      </View>
      <Text>Deposit paid: {bookingData.depositpaid.toString()}</Text>
      <Text>Additional needs: {bookingData.additionalneeds}</Text>
    </View>
  );
}

export default BookingDetail;
