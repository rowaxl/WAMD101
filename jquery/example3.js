class Hotel {
  constructor(
    name = '',
    roomRate = 0,
    discount = 0
  ) {}

  offerPrice() {
    return this.roomRate * ((100 - this.discount) / 100)
  }
}

// create park hotel and set data
const parkHotel = new Hotel();
parkHotel.name = 'Park';
parkHotel.roomRate = 240;
parkHotel.discount = 15;

// visualize hotel's data
const hotelName = document.getElementById('hotel-name');
const roomRate = document.getElementById('rate');
const specialRate = document.getElementById('special');

hotelName.append(parkHotel.name);
roomRate.append(parkHotel.roomRate);
specialRate.append(parkHotel.offerPrice());

// set expiry date
const expires = document.getElementById('expires');

const getExpiry = (today) => {
  const expireDate = new Date(today);
  expireDate.setDate(today.getDate() + 7);

  return expireDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

expires.append(getExpiry(new Date()))