import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChampionggService {

    constructor(private http: HttpClient) {
    }

    public getChampions(): Observable<any> {
        return this.http.get(`${environment.championGG.url}champions?api_key=${environment.championGG.apiToken}`);
    }
}
