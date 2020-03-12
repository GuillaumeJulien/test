export class Publication {
  slug;
  dateCreated;
  status;
  name;
  industry;
  sharedJob;
  poster: object;
  company: object;
  content: object;
  tags: [];
  attachmentPicture: string;

  constructor(value) {
    this.slug = value.slug ;
    this.dateCreated = value.date_created;
    this.status = value.status;
    this.name = value.name;
    this.industry = value.industry;
    this.sharedJob = value.shared_job;
    this.poster = value.poster;
    this.company = value.company;
    this.content = value.content;
    this.tags = value.tags;
    this.attachmentPicture = value.attachment_picture;
  }
}
