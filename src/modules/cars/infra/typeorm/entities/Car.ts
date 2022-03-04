import { randomUUID } from 'crypto';
import { Column, Entity, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity('cars')
class Car {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  daily_rate: number;

  @Column()
  license_plate: string;

  @Column()
  fine_amount: number;

  @Column()
  brand: string;

  @Column()
  category_id: string;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}

export { Car };
