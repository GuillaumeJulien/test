import {Component, OnInit} from '@angular/core';
import {FeedsService} from './services/feed/feeds.service';
import {Feed} from './class/feed';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
