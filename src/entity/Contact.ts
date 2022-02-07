import {
	Entity, PrimaryGeneratedColumn, Column,
} from 'typeorm';

type ContactStatus = 'created' | 'deleted' | 'invalid';

@Entity()
export default class Contact {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	email: string;

	@Column()
	phone: string;

	@Column({
		type: 'enum',
		enum: ['created', 'deleted', 'invalid'],
		default: 'created',
	})
	status: ContactStatus;
}
