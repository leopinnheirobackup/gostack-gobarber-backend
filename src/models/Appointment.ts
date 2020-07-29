import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Entidade de agendamento
@Entity('appointments')
class Appointment {
  // Propriedades
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  provider: string;

  @Column('time with time zone')
  date: Date;
}

export default Appointment;
