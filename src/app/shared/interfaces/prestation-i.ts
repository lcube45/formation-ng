import { TypePrestation } from '../enums/type-prestation.enum';
import { StatusPrestation } from '../enums/status-prestation.enum';

export interface PrestationI {
  id: string;
  type: TypePrestation;
  client: string;
  duree: number;
  tjmHt: number;
  tva: number;
  status: StatusPrestation;
  totalHt(): number;
  totalTtc(): number;
}
