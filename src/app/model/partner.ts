import {Type} from './type';
import {Location} from './location';
import {HotWord} from './hotWord';

export class Partner {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  picture: string;
  latitude: number;
  longitude: number;
  horary: string;
  comment: string;
  specialOffer: boolean;
  offer: string;
  location: Location;
  tripAdvisorLink: string;
  type: Type;
  country: string;
  hotWords: HotWord[];
}
