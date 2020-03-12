import {Injectable} from '@angular/core';
import {ResourcesService} from '../ressources/resources.service';
import {map} from 'rxjs/operators';
import {Feed} from '../../class/feed';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  constructor(private resourcesService: ResourcesService) {
  }

  getFeeds(): Observable<Array<Feed>> {
    return this.resourcesService.getFeedResources('/v2/dashboard/?direction=newest')
      .pipe(map(value => {
        return value.feed_items.feed_items.map((feed) => {
          return new Feed(feed);
        });
      }));
  }
}
