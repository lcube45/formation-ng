import { Prestation } from 'src/app/shared/models/prestation';
import { TypePrestation } from 'src/app/shared/enums/type-prestation.enum';
import { StatusPrestation } from 'src/app/shared/enums/status-prestation.enum';

export const fakePrestations: Array<Prestation> = [
  new Prestation({
    id: 'presta-01',
    type: TypePrestation.COACHING,
    client: 'Gfi',
    duree: 5
  }),
  new Prestation({
    id: 'presta-02',
    type: TypePrestation.COACHING,
    status: StatusPrestation.CONFIRME,
    client: 'Cap Gemini',
    duree: 200,
    tjmHt: 500
  }),
  new Prestation({
    id: 'presta-03',
    type: TypePrestation.FORMATION,
    client: 'Acatus',
    duree: 3
  }),
];
