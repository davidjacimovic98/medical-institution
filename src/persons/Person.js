import { NotInstantiable } from "../errors/NotInstantiable.js";
import { getCurrentDateAndTime } from "../utils.js";

export class Person {
  constructor(firstName, lastName) {
    if (this.constructor === Person) {
      throw new NotInstantiable("Person is not instantiable!");
    }
    this.firstName = firstName;
    this.lastName = lastName;

    this.postCreated();
  }

  postCreated() {
    const { date, month, year, hours, mins } = getCurrentDateAndTime();
    console.log(
      `[${date}.${month}.${year} ${hours}:${mins}] ${this.constructor.name} ${this.firstName} ${this.lastName} created.`
    );
  }
}
