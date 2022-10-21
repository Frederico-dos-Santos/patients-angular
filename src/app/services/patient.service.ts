import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { catchError, from, map, Observable, tap, toArray} from 'rxjs';
import { IPatient } from '../interfaces/ipatient.service';

@Injectable()
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatients$(): Observable<IPatient> {
    return from([
      { prontuario: 1, nome: 'José da Silva', nascimento: new Date(1920, 1, 1), email: 'jose@email.com' } as IPatient,
      { prontuario: 2, nome: 'Maria Alcantara', nascimento: new Date(1920, 10, 12), email: 'maria@email.com' } as IPatient,
    ]);
  }

  getPatients2$(): Observable<any> {

   /* const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '85128b8bafmsh598de6a2854f82ep17d9c7jsnb6456986814c',
        'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
      }
    };*/

    /*const headers = new Headers();
    headers.append('X-RapidAPI-Key', '85128b8bafmsh598de6a2854f82ep17d9c7jsnb6456986814c');
    headers.append('X-RapidAPI-Host', 'api-nba-v1.p.rapidapi.com');*/

    const params = new HttpParams()
    .set('X-RapidAPI-Key', '85128b8bafmsh598de6a2854f82ep17d9c7jsnb6456986814c')
    .set('X-RapidAPI-Hostt', "api-nba-v1.p.rapidapi.com");

    return this.http.get<any>('https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021', {params})
      .pipe(
        tap(player => {
          return console.log(player);
        }),
        map(player => {
          return {
            prontuario: player.id,
            nome: player.name,
            nascimento: new Date(1920, 10, 12),
            email: 'maria@email.com'
          }
        }),
        toArray(),
        catchError((err, obs) => {
          console.log(err); 
          return obs;
        })
      )
  }
}
/*fetch('https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
    }
  };
  
  fetch('https://api-nba-v1.p.rapidapi.com/players?team=1&season=2021', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}*/


