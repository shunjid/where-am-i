import Mappable from "../types/Mappable";

export class User implements Mappable {
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

  public markerContent(): string {
    return `Username: ${this.name}`;
  }
}
