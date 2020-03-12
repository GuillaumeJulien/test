import {Publication} from './publication';

export class Feed {
  id: string;
  type: string;
  reasons: any[];
  date: string;
  publication: Publication;

  constructor(value) {
    const {id, type, reasons, date, publication} = value;
    this.id = id;
    this.type = type;
    this.reasons = reasons;
    this.date = date;
    this.publication = publication != null ? new Publication(publication) : publication;
  }
}
