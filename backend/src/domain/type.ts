export type DomainContact = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	id?: string;
	status?: 'created' | 'deleted' | 'valid' | 'invalid';
	log?: string;
};

export type RawContact = {
	first_name: string;
	last_name: string;
	phone: string;
	email: string;
};
