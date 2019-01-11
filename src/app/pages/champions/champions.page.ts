import {Component} from '@angular/core';
import {DdragonService} from '../../services/ddragon.service';
import {Champion} from '../../model/champion';

@Component({
    selector: 'app-champions',
    templateUrl: './champions.page.html',
    styleUrls: ['./champions.page.scss'],
})
export class ChampionsPage {

    public searchQuery: string;
    public champions: Champion[];
    public filteredList: Champion[];

    constructor(private ddragonSrv: DdragonService) {
        this.ddragonSrv.getChampions().subscribe(res => {
            this.champions = res;
            this.filteredList = res;
        });
    }

    public filterChampionsList(): void {
        this.filteredList = this.champions;
        if (this.searchQuery && this.searchQuery.length > 0) {
            this.filteredList = this.champions.filter(value => value.id.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    }

}
