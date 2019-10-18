import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: string;
  label: string;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
