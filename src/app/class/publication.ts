export class Publication {
  public slug;
  public dateCreated;
  public status;
  public name;
  public industry;
  public sharedJob;

  constructor(value) {
    const {slug, date_created, status, name, industry, shared_job} = value;
    this.slug = slug;
    this.dateCreated = date_created;
    this.status = status;
    this.name = name;
    this.industry = industry;
    this.sharedJob = shared_job;
  }
}
