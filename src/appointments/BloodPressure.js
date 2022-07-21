import { Appointment } from "./Appointment.js";

export class BloodPressure extends Appointment {
  constructor(day, month, year, hours, mins) {
    super(day, month, year, hours, mins);
  }

  generateResults() {
    let systolic = Math.floor(Math.random() * 140 + 50);
    let diastolic = Math.floor(Math.random() * 100 + 20);
    let pulse = Math.floor(Math.random() * 100 + 20);
    return `Blood pressure: [systolic] [diastolic] [pulse] - [${systolic}] [${diastolic}] [${pulse}]`;
  }
}
