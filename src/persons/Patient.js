import { getCurrentDateAndTime } from "../utils.js";
import { Person } from "./Person.js";
import { ExistingDoctor } from "../errors/ExistingDoctor.js";

export class Patient extends Person {
  constructor(firstName, lastName, UCIN, medicalRecordNumber) {
    super(firstName, lastName);
    this.UCIN = UCIN;
    this.medicalRecordNumber = medicalRecordNumber;
    this.chosenDoctor = null;
    this.scheduledAppointments = [];
  }

  chooseDoctor(doctor) {
    if (this.chosenDoctor !== null) {
      throw new ExistingDoctor(
        `Patient ${this.firstName} ${this.lastName} already has a doctor!`
      );
    } else {
      this.chosenDoctor = `${doctor.firstName} ${doctor.lastName}`;
      this.logChooseDoctor(doctor);
    }
  }

  logChooseDoctor(doctor) {
    const { date, month, year, hours, mins } = getCurrentDateAndTime();
    console.log(
      `[${date}.${month}.${year} ${hours}:${mins}] Patient ${this.firstName} ${this.lastName} chose ${doctor.firstName} ${doctor.lastName} for his doctor.`
    );
  }

  setAppointment(appointments) {
    for (let i = 0; i < appointments.length; i++) {
      if (appointments[i].patient.firstName === this.firstName) {
        this.scheduledAppointments.push(appointments[i]);
      }
    }
  }

  doAppointment(appointments) {
    const { date, month, year, hours, mins } = getCurrentDateAndTime();
    for (let i = 0; i < appointments.length; i++) {
      console.log(
        `[${date}.${month}.${year} ${hours}:${mins}] Patient ${this.firstName} ${this.lastName} got his results:`,
        appointments[i].appointment.generateResults()
      );
    }
  }
}
