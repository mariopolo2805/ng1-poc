import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<any> {
    return this.httpClient.get<any>(environment.apiUrl).pipe(
      map((response) => {
        const list = response.results.map((item: any, index: number) => {
          item.image = item.image ?? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
          return item;
        })
        return list;
      })
    );
  }
}
