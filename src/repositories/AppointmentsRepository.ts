import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Array<Appointment>;

  constructor() {
    this.appointments = [];
  }

  // Retonar a lista de agendamentos
  public all(): Array<Appointment> {
    return this.appointments;
  }

  // Procura um agendamento pela data de agendamento
  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(appointment.date, date),
    );

    return findAppointment || null;
  }

  // Adiciona um novo Agendamento
  public create({ provider, date }: CreateAppointmentDTO): Appointment {
    // Cria o objeto de agentamento
    const appointment = new Appointment({ provider, date });
    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
