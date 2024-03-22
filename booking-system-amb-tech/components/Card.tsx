import { View, Text } from "react-native";

type Booking = {
    bookingid: number;
};

function Card(props: Booking) {
    return (
        <View className="flex bg-white basis-1/4 p-4" key={props.bookingid}>
            <Text>Id: {props.bookingid}</Text>
        </View>
    );
}

export default Card;
