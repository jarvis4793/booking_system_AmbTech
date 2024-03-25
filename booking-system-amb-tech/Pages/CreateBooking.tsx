import { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Alert, Switch } from "react-native";
import { useSelector } from "react-redux";
import { UserState } from "../store/store";
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { fetchPublic } from "../api/fetch";

function CreateBooking() {

  const firstName = useSelector((state: UserState) => state.firstName);
  const lastName = useSelector((state: UserState) => state.lastName);
  const [open, setOpen] = useState(false)

  const [newBooking, setNewBooking] = useState<BookingDetails>(
    {
      firstname: firstName,
      lastname: lastName,
      totalprice: 0,
      depositpaid: false,
      bookingdates: {
        checkin: new Date("2018-01-01"),
        checkout: new Date("2019-01-01")
      },
      additionalneeds: ""
    }
  )

  const toggleSwitch = () => setNewBooking({ ...newBooking, depositpaid: !newBooking.depositpaid });

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 120 : 0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View className="flex-1 bg-white">
            <Text className="text-2xl m-2">New Booking</Text>
            <View className="flex-row m-2">
              <Text className="text-2xl">First Name: </Text>
              <TextInput className="text-2xl border-2 w-1/2" readOnly={true} value={newBooking.firstname} />
            </View>
            <View className="flex-row m-2">
              <Text className="text-2xl">Last Name: </Text>
              <TextInput className="text-2xl border-2 w-1/2" readOnly={true} value={newBooking.lastname} />
            </View>
            <View className="flex-row m-2">
              <Text className="text-2xl">Total price: </Text>
              <TextInput className="text-2xl border-2 w-1/2" inputMode={"numeric"} onChangeText={value => setNewBooking({ ...newBooking, totalprice: Number(value) })} />
            </View>
            <Text className="text-2xl m-2">Booking Dates</Text>
            <View>
              <Text className="text-2xl m-2">Check In: </Text>
              <RNDateTimePicker mode="date" display="spinner" value={new Date("2018-01-01")} onChange={(event: DateTimePickerEvent, date: Date) => {
                setNewBooking({
                  ...newBooking, bookingdates: {
                    ...newBooking.bookingdates,
                    checkin: date,
                  }
                })
                if (date > newBooking.bookingdates.checkout) {
                  console.log("no")
                } else {
                  console.log("yes")
                }
              }} />
              <Text className="text-2xl m-2">Check Out: </Text>
              <RNDateTimePicker mode="date" display="spinner" value={new Date("2019-01-01")} onChange={(event: DateTimePickerEvent, date: Date) => {
                setNewBooking({
                  ...newBooking, bookingdates: {
                    ...newBooking.bookingdates,
                    checkout: date,
                  },
                })
              }} />
            </View>
            <View className="flex-row m-2">
              <Text className="text-2xl">Additional needs: </Text>
              <TextInput className="text-2xl border-2 w-1/2" inputMode="text" onChangeText={value => setNewBooking({ ...newBooking, additionalneeds: value })} />
            </View>
            <View className="flex-row m-2">
              <Text className="text-2xl">Deposit paid: </Text>
              <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={newBooking.depositpaid ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={newBooking.depositpaid}
              />
            </View>
            <View className="flex flex-1 justify-center m-6 p-1 bg-sky-500 rounded-full">
              <View className="basis-1/2">
                <Button
                  color={'#FFFFFF'}
                  title="Submit"
                  onPress={async () => {
                    if (newBooking.bookingdates.checkin > newBooking.bookingdates.checkout) {
                      Alert.alert(`Checkin date has to be earlier than checkout date`)
                    } else {
                      const result = await fetchPublic("booking", "post", newBooking)
                      Alert.alert(`New booking id: ${result.bookingid}`)
                    }
                  }
                  }
                />
              </View>
            </View>
          </View >
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  );
}

export default CreateBooking;
