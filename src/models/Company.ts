export class Company {
  name: string;
  catchPhrase: string;
  location: {
    latitude: number;
    longitude: number;
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
      latitude: latitude,
      longitude: longitude,
    };
  }
}
