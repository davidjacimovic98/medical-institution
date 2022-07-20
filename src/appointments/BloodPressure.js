import { Appointment } from "./Appointment.js";

export class BloodPressure extends Appointment {
  constructor(date, time) {
    super(date, time);
  }

  generateResults() {
    let systolic = Math.floor(Math.random() * 140 + 50);
    let diastolic = Math.floor(Math.random() * 100 + 20);
    let pulse = Math.floor(Math.random() * 100 + 20);
    return `Blood pressure: [systolic] [diastolic] [pulse] - [${systolic}] [${diastolic}] [${pulse}]`;
  }
}
