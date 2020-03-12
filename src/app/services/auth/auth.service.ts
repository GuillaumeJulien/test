import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {SessionService} from '../users/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string;
  private baseUrl = 'https://api.wizbii.com/';

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router) {
  }

  obtainAccessToken({username, password}) {
    const body = new URLSearchParams();
    body.set(`username`, username);
    body.set(`password`, password);
    body.set(`grant_type`, 'password');
    body.set(`client_id`, 'test');
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.baseUrl + 'v1/account/validate', body.toString(), {
      headers
    }).subscribe(
      data => this.saveToken(data['access-token']),
      error => error
    );
  }

  getAccessToken() {
    if (this.accessToken == null) {
      this.accessToken = this.cookieService.get('access_token');
    }
    return this.accessToken;
  }

  isLoggedIn() {
    return this.getAccessToken() != null;
  }

  async saveToken(token) {
    this.accessToken = token;
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    this.cookieService.set('access_token', token, expireDate);
    await this.router.navigate(['/'], {replaceUrl: true});
    return true;
  }
}
