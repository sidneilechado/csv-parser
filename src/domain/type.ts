export type DomainContact = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	id?: string;
	status?: 'created' | 'deleted' | 'valid' | 'invalid';
};
