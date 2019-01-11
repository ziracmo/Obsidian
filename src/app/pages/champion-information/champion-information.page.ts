import {Component, OnInit} from '@angular/core';
import {DdragonService} from '../../services/ddragon.service';
import {ActivatedRoute} from '@angular/router';
import {Champion} from '../../model/champion';

@Component({
    selector: 'app-champion-information',
    templateUrl: './champion-information.page.html',
    styleUrls: ['./champion-information.page.scss'],
})
export class ChampionInformationPage implements OnInit {

    public id: string;
    public champion: Champion;

    constructor(private route: ActivatedRoute, private ddSrv: DdragonService) {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.ddSrv.getChampion(this.id).subscribe(res => {
                console.log(res);
                this.champion = res;
            });
        });
    }

    ngOnInit() {
    }

}
