import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints, environment } from 'src/environments/environment';
import { SessionRequest } from '../models/SessionRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient) {}

  fetchSessionId(): Observable<SessionRequest> {
    return this.http.get<SessionRequest>(
      `${environment.baseUrl}${ApiEndpoints.checkout}`
    );
  }
}
