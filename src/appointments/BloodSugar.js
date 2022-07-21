import { Appointment } from "./Appointment.js";
import { getCurrentDateAndTime } from "../utils.js";

export class BloodSugar extends Appointment {
  constructor(day, month, year, hours, mins) {
    super(day, month, year, hours, mins);
  }

  generateResults() {
    const { hours, mins } = getCurrentDateAndTime();
    let value = Math.floor(Math.random() * 15 + 1);
    let lastMealTime = `${hours}:${mins}`;

    return `Blood sugar: [value] [last meal time] - [${value}] [${lastMealTime}]`;
  }
}
