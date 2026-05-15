export type Role =
  | 'member'
  | 'landlord'
  | 'broker'
  | 'valuator'
  | 'legal'
  | 'accountant'
  | 'manager';

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: Role;
};
