export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(name: string, latitude: number, longitude: number) {
    this.name = name;
    this.location = {
      lat: latitude,
      lng: longitude,
    };
  }
}
