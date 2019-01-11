import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Champion} from '../model/champion';

@Injectable({
    providedIn: 'root'
})
export class DdragonService {
    constructor(private http: HttpClient) {
    }

    public getChampions(): Observable<Champion[]> {
        return this.http.get('http://ddragon.leagueoflegends.com/cdn/9.1.1/data/fr_FR/champion.json').pipe(
            map((res: any) => {
                const ng = [];
                Object.keys(res.data).forEach(value => ng.push(res.data[value]));
                return ng;
            }),
        );
    }

    public getChampion(name: string): Observable<any> {
        return this.http.get('http://ddragon.leagueoflegends.com/cdn/9.1.1/data/fr_FR/champion/' + name + '.json').pipe(
            map((res: any) => res.data[name])
        );
    }

}
