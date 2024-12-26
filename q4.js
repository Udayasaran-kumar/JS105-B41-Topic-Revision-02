const userProfile = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA',
    postalCode: '10001',
    coordinates: {
      lat: 40.7128,
      long: -74.0060
    }
  },
  contact: {
    phone: '123-456-7890',
    email: 'john@example.com'
  },
  preferences: {
    newsletter: true,
    notifications: {
      email: true,
      sms: false
    }
  }
};
function flattenProfile(obj) {
  
  let {
    name,
    address: { city, country, coordinates },
    contact: { phone, email },
    preferences: { notifications }
  } = obj;

  let newobj = {
    name,
    city,
    country,
    phone,
    email,
    coordinates,
    notifications
  };

  console.log(newobj);
}

flattenProfile(userProfile);
