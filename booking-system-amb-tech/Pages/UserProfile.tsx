import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { UserState } from "../store/store";

function UserProfile() {

    const firstName = useSelector((state: UserState) => state.firstName);
    const lastName = useSelector((state: UserState) => state.lastName);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>UserProfile</Text>
            <Text>{firstName}</Text>
            <Text>{lastName}</Text>
        </View>
    );
}

export default UserProfile