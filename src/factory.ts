import faker from "faker";
import { Company } from "./models/Company";
import { User } from "./models/User";

export class Factory {
  public generateUser(): User {
    return new User(
      faker.name.firstName(),
      parseFloat(faker.address.latitude()),
      parseFloat(faker.address.longitude())
    );
  }

  public generateCompany(): Company {
    return new Company(
      faker.company.companyName(),
      faker.company.catchPhrase(),
      parseFloat(faker.address.latitude()),
      parseFloat(faker.address.longitude())
    );
  }
}
