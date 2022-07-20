import { Person } from "./persons/Person.js";
import { Doctor } from "./persons/Doctor.js";
import { Patient } from "./persons/Patient.js";
import { BloodCholesterol } from "./appointments/BloodCholesterol.js";
import { BloodPressure } from "./appointments/BloodPressure.js";
import { BloodSugar } from "./appointments/BloodSugar.js";

const milan = new Doctor("Milan", "Jankovic", "surgeon");
console.log(milan);
// const marko = new Person("Marko", "Kajkut");
// const stefan = new Doctor("Stefan", "Dukic", "orthopedic");

const dragan = new Patient("Dragan", "Markovic", "287482849148", " 10");
console.log(dragan);

// const david = new Patient("David", "Jacimovic", "828272626", " 20");
// console.log(david);
dragan.chooseDoctor(milan);
// dragan.chooseDoctor(stefan); // Throws an Error because patient can have only one doctor!

milan.choosePatient(dragan);
// milan.choosePatient(david);

milan.scheduleAppointment(dragan, new BloodSugar("25.08.2022.", "14:30"));
milan.scheduleAppointment(dragan, new BloodPressure("26.08.2022.", "15:10"));
// milan.scheduleAppointment(david, new BloodSugar("22.12.2020", "07:30"));

dragan.setAppointment(milan.filterAppointments(dragan));
// david.setAppointment(milan.filterAppointments(david));

dragan.doAppointment(milan.filterAppointments(dragan));
// david.doAppointment(milan.filterAppointments(david));
