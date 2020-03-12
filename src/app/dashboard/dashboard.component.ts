import {Component, OnInit} from '@angular/core';
import {FeedsService} from '../services/feed/feeds.service';
import {Feed} from '../class/feed';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  protected feeds: Feed[];
  private loadingFeeds: boolean;

  constructor(private feedsService: FeedsService) {
  }

  ngOnInit() {
    this.loadingFeeds = true;
    this.feedsService.getFeeds().subscribe((value => {
      console.log(value);
      this.feeds = value;
    }), error => {
      return error;
    }, () => {
      this.loadingFeeds = false;
    });
  }

}
