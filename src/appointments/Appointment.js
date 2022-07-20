import { NotInstantiable } from "../errors/NotInstantiable.js";

export class Appointment {
  constructor(date, time) {
    if (this.constructor === Appointment) {
      throw new NotInstantiable("Appointment is not instantiable!");
    }
    this.date = date;
    this.time = time;
  }

  generateResults() {
    throw new Error("Not implemented");
  }
}
