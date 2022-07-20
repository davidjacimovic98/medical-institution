import { Appointment } from "./Appointment.js";
import { getCurrentDateAndTime } from "../utils.js";

export class BloodCholesterol extends Appointment {
  constructor(date, time) {
    super(date, time);
  }

  generateResults() {
    const { hours, mins } = getCurrentDateAndTime();
    let value = Math.floor(Math.random() * 15 + 1);
    let lastMealTime = `${hours}:${mins}`;

    return `Blood sugar: [value] [last meal time] - [${value}] [${lastMealTime}]`;
  }
}
