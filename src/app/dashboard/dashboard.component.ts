import {Component, OnInit} from '@angular/core';
import {FeedsService} from '../services/feed/feeds.service';
import {Feed} from '../class/feed';
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  protected feeds: Feed[];
  private loadingFeeds: boolean;
  private feedsSubscription: Subscription;

  constructor(private feedsService: FeedsService, private authService: AuthService) {
  }

  getUserFullName() {
    return this.authService.profile.name;
  }

  ngOnInit() {
    this.loadingFeeds = true;
    this.feedsSubscription = this.feedsService.getFeeds().subscribe((feeds => {
      this.feeds = feeds.filter(feed => {
        if (feed.publication && feed.publication.company) {
          return feed.publication.company.status !== 'BANNI';
        }
      });
    }), error => {
      return error;
    }, () => {
      this.loadingFeeds = false;
    });
  }
}
