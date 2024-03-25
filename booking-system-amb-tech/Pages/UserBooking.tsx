import { useQuery } from "@tanstack/react-query";
import { View, Text, ScrollView, StyleSheet, Pressable, Modal, Alert } from "react-native";
import { fetchPublic } from "../api/fetch";
import { useSelector } from "react-redux";
import { UserState } from "../store/store";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import Card from "../components/Card";

function UserBooking({ navigation }) {
  const isFocused = useIsFocused();
  const firstName = useSelector((state: UserState) => state.firstName);
  const lastName = useSelector((state: UserState) => state.lastName);
  const [modalVisible, setModalVisible] = useState(false);
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View className="flex-1 justify-center item-center mt-22">
          <View className="m-20 bg-white rounded-2xl p-7 item-center shadow elevation-5">
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
      <View className="flex flex-row flex-wrap justify-between item-start ">
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

const styles = StyleSheet.create({
  // modalView: {
  //   margin: 20,
  //   backgroundColor: 'white',
  //   borderRadius: 20,
  //   padding: 35,
  //   alignItems: 'center',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 2,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  //   elevation: 5,
  // },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default UserBooking;
