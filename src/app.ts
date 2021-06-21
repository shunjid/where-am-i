import { UserGenerator } from "./generators/UserGenerator";
import { CompanyGenerator } from "./generators/CompanyGeneratory";

const userGenerator = new UserGenerator();
const companyGenerator = new CompanyGenerator();

console.log(userGenerator.generateUser());
console.log(companyGenerator.generateCompany());

console.log(google);
