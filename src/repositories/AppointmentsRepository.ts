import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

/**
 * Define que esse será o repositorio da model Appointment
 */
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  // Procura um agendamento pela data de agendamento
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
