import {Component, Input, OnInit} from '@angular/core';
import {Feed} from '../../class/feed';
import * as moment from 'moment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() feed: Feed;
  private thanks: number;

  constructor() {
  }

  ngOnInit() {
    this.thanks =
      localStorage.getItem(`thanks#${this.feed.id}`) != null ?
        parseInt(localStorage.getItem(`thanks#${this.feed.id}`), 10) : 0;
  }

  getThanks() {
    return this.thanks === 0 ? '' : this.thanks;
  }

  addThanks() {
    this.thanks++;
    /// TODO : should be in service
    localStorage.setItem(`thanks#${this.feed.id}`, this.thanks.toString());
  }

  timeAgo() {
    if (this.feed.publication) {
      moment.locale('fr');
      return moment(this.feed.publication.dateCreated).fromNow();
    }
    return;
  }

}
