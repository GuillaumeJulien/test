import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken: string;
  private baseUrl = 'https://api.wizbii.com/';
  public profile;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router) {
    if (this.isLoggedIn()) {
      this.profile = JSON.parse(localStorage.getItem(`user#${this.getAccessToken()}`));
    }
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
      data => {
        this.saveSession(data);
      },
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

  saveProfile(profile, accessToken) {
    this.profile = profile;
    localStorage.setItem(`user#${accessToken}`, JSON.stringify(profile));
  }

  async saveSession(sessionData) {
    this.saveProfile(sessionData.profile, sessionData['access-token']);
    await this.saveToken(sessionData['access-token']);
  }

  async saveToken(token) {
    this.accessToken = token;
    const expireDate = new Date().getTime() + 1000;
    this.cookieService.set('access_token', token, expireDate);
    await this.router.navigate(['/'], {replaceUrl: true});
  }
}
