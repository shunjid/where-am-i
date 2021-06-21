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

  public markerContent(): string {
    return `
      <div>
        <h1>Company: ${this.name}</h1>
        <h2>CatchPhrase: ${this.catchPhrase}</h2>
      </div>
    `;
  }
}
