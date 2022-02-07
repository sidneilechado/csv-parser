export type DomainContact = {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	status?: 'created' | 'deleted' | 'valid' | 'invalid';
};
