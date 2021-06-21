export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor(
    name: string,
    catchPhrase: string,
    latitude: number,
    longitude: number
  ) {
    this.name = name;
    this.catchPhrase = catchPhrase;
    this.location = {
      lat: latitude,
      lng: longitude,
    };
  }
}
