import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {share} from 'rxjs/operators';
import {LoginModel} from '../../models/Login.model';
import {IResponse} from '../interfaces/IResponse';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  private static readonly url = 'http//accounts.spotify.com/autorize';
  private static clientId = 'CLIENT_ID';

  constructor(private http: HttpClient) {}

  //var client_id = 'CLIENT_ID';
  // var redirect_uri = 'http://localhost:8888/callback';
  // var app = express();
  // app.get('/login', function(req, res) {
  //   var state = generateRandomString(16);
  //   var scope = 'user-read-private user-read-email';
  //   res.redirect('https://accounts.spotify.com/authorize?' +
  //     querystring.stringify({
  //       response_type: 'code',
  //       client_id: client_id,
  //       scope: scope,
  //       redirect_uri: redirect_uri,
  //       state: state
  //     }));

}
