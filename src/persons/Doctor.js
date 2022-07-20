import { Person } from "./Person.js";

export class Doctor extends Person {
  constructor(firstName, lastName, specialization) {
    super(firstName, lastName);
    this.specialization = specialization;
    this.chosenPatients = [];
    this.scheduledAppointments = [];
  }

  choosePatient(patient) {
    this.chosenPatients.push(patient);
  }

  scheduleAppointment(patient, appointment) {
    this.scheduledAppointments.push({ patient, appointment });
  }

  filterAppointments(patient) {
    return this.scheduledAppointments.filter(
      (p) => p.patient.firstName === patient.firstName
    );
  }
}
