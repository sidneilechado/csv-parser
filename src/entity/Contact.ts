import {
	Entity, PrimaryColumn, Column,
} from 'typeorm';

type ContactStatus = 'created' | 'deleted' | 'valid' | 'invalid';

@Entity()
export default class Contact {
	@PrimaryColumn()
	id: string;

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
		enum: ['created', 'deleted', 'valid', 'invalid'],
		default: 'created',
	})
	status: ContactStatus;

	@Column({
		nullable: true,
	})
	log: string;
}
