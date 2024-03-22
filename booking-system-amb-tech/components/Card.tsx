import { View, Text } from "react-native";

function Card(props: Booking) {
  return (
    <View
      className="flex bg-fuchsia-600 justify-center items-start basis-1/4 p-4 m-2 rounded-full border-2"
      key={props.bookingid}
    >
      <Text>Id: {props.bookingid}</Text>
    </View>
  );
}

export default Card;
