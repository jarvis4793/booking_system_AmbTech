type Booking = {
  bookingid: number;
};

type BookingDetails = {
  firstname: string,
  lastname: string,
  totalprice: number,
  depositpaid: boolean,
  bookingdates: {
    checkin: Date,
    checkout: Date
  },
  additionalneeds: string
}
