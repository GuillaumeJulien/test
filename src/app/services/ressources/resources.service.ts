import {Injectable} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private baseUrl = 'https://api.wizbii.com';
  private readonly oAuthHeader: HttpHeaders;

  constructor(private authService: AuthService, private httpClient: HttpClient) {
    this.oAuthHeader = new HttpHeaders().set('Authorization', `Bearer ${this.authService.getAccessToken()}` );
  }

  getFeedResources(resourceUrl) {
    return this.httpClient.post(this.baseUrl + resourceUrl, {}, {
      headers: this.oAuthHeader
    });
  }
}
