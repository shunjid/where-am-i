import faker from "faker";
import { User } from "../models/User";

export class UserGenerator {
  public generateUser(): User {
    return new User(
      faker.name.firstName(),
      parseFloat(faker.address.latitude()),
      parseFloat(faker.address.longitude())
    );
  }
}
