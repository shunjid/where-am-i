import { Factory } from "./factory";
import { CustomMap } from "./models/CustomMap";

const factory = new Factory();

const map = new CustomMap("map");
map.addMarker(factory.generateUser());
map.addMarker(factory.generateCompany());
