import faker from "faker";
import { Company } from "../models/Company";

export class CompanyGenerator {
  public generateCompany(): Company {
    return new Company(
      faker.company.companyName(),
      faker.company.catchPhrase(),
      parseFloat(faker.address.latitude()),
      parseFloat(faker.address.longitude())
    );
  }
}
