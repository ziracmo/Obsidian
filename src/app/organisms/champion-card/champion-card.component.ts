import {Component, Input} from '@angular/core';
import {Champion} from '../../model/champion';
import {Router} from '@angular/router';

@Component({
    selector: 'app-champion-card',
    templateUrl: './champion-card.component.html',
    styleUrls: ['./champion-card.component.scss']
})
export class ChampionCardComponent {

    @Input()
    public champion: Champion;

    constructor(private router: Router) {
    }

    public goToInformation(): void {
        this.router.navigate(['champion', this.champion.id]);
    }
}
