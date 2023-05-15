import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Color } from 'src/app/models/color';
import { ApiEndpoints, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor(private http: HttpClient) {}

  public fetchColors(): Observable<string[]> {
    return this.http
      .get<Color[]>(`${environment.baseUrl}${ApiEndpoints.colors}`)
      .pipe(map((colors) => colors.map((color) => color.hexCode)));
  }
}
