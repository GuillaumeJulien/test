import {Publication} from './publication';

export class Feed {
  id: string;
  type: string;
  private reasons: any[];
  private date: string;
  publication: Publication;

  constructor(value) {
    const {id, type, reasons, date, publication} = value;
    this.id = id;
    this.type = type;
    this.reasons = reasons;
    this.date = date;
    this.publication = new Publication(publication);
  }
}
