export default interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
