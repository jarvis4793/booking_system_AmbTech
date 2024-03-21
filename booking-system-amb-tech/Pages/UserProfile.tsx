import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { UserState } from "../store/store";

function UserProfile() {
  const firstName = useSelector((state: UserState) => state.firstName);
  const lastName = useSelector((state: UserState) => state.lastName);

  return (
    <View className="flex-1 bg-white">
      <View className="flex flex-row ">
        <Text className="text-2xl">first name:</Text>
        <Text className="text-2xl">{firstName}</Text>
      </View>
      <View className="flex flex-row">
        <Text className="text-2xl">Last name:</Text>
        <Text className="text-2xl">{lastName}</Text>
      </View>
    </View>
  );
}

export default UserProfile;
