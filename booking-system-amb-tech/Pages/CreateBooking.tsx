import { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from "react-native";
import { useSelector } from "react-redux";
import { UserState } from "../store/store";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";

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
      checkin: new Date("2018-01-01"),
      checkout: new Date("2019-01-01"),
      additionalneeds: ""
    }
  )


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <View className="flex-1 bg-white">
            <Text className="text-2xl">New Booking</Text>
            <View className="flex-row">
              <Text className="text-2xl">First Name: </Text>
              <TextInput className="text-2xl border-2 w-1/2" readOnly={true} value={newBooking.firstname} />
            </View>
            <View className="flex-row">
              <Text className="text-2xl">Last Name: </Text>
              <TextInput className="text-2xl border-2 w-1/2" readOnly={true} value={newBooking.lastname} />
            </View>
            <View className="flex-row">
              <Text className="text-2xl">Total price: </Text>
              <TextInput className="text-2xl border-2 w-1/2" inputMode={"numeric"} onChangeText={value => setNewBooking({ ...newBooking, totalprice: Number(value) })} />
            </View>
            <Text className="text-2xl">Booking Dates</Text>
            <View>
              <Text className="text-2xl">Check In: </Text>
              <RNDateTimePicker mode="date" display="spinner" value={new Date("2018-01-01")} onChange={(event: DateTimePickerEvent, date: Date) => {
                // console.log(date.toISOString().split('T')[0])
                setNewBooking({ ...newBooking, checkin: date })
              }} />
              <Text className="text-2xl">Check Out: </Text>
              <RNDateTimePicker mode="date" display="spinner" value={new Date("2019-01-01")} onChange={(event: DateTimePickerEvent, date: Date) => {
                // console.log(date.toISOString().split('T')[0])
                setNewBooking({ ...newBooking, checkout: date })
              }} />
            </View>
            <View className="flex-row">
              <Text className="text-2xl">Additional needs: </Text>
              <TextInput className="text-2xl border-2 w-1/2" inputMode="text" onChangeText={value => setNewBooking({ ...newBooking, additionalneeds: value })} />
            </View>
          </View >
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  );
}

export default CreateBooking;
