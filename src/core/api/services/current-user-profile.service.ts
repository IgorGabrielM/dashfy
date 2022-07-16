import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserProfileService {

  readonly ulr: 'https://api.spotify.com/v1/me';

  constructor() { }
}
