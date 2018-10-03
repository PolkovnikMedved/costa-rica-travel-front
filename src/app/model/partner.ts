import {Type} from './type';
import {Location} from './location';
import {HotWord} from './hotWord';

export class Partner {

  constructor
  (
    public id: number,
    public name: string,
    public email: string,
    public phone: string,
    public address: string,
    public picture: string,
    public latitude: number,
    public longitude: number,
    public horary: string,
    public comment: string,
    public specialOffer: boolean,
    public offer: string,
    public location: Location,
    public tripAdvisorLink: string,
    public type: Type,
    public country: string,
    public hotWords: HotWord[],
  ) {}
}
