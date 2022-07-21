import { NotInstantiable } from "../errors/NotInstantiable.js";
import { setDateTime, formatDateTime } from "../utils.js";

export class Appointment {
  constructor(day, month, year, hours, mins) {
    if (this.constructor === Appointment) {
      throw new NotInstantiable("Appointment is not instantiable!");
    }
    this.dateTime = formatDateTime(
      setDateTime(day, month - 1, year, hours, mins)
    );
  }

  generateResults() {
    throw new Error("Not implemented");
  }
}
