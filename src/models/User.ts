export class User {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor(name: string, latitude: number, longitude: number) {
    this.name = name;
    this.location = {
      latitude: latitude,
      longitude: longitude,
    };
  }
}
