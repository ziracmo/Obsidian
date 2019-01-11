import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ChampionsPage} from './champions.page';
import {HttpClientModule} from '@angular/common/http';
import {DdragonService} from '../../services/ddragon.service';
import {ChampionCardComponent} from '../../organisms/champion-card/champion-card.component';
import {PipesModule} from '../../pipes/pipes.module';

const routes: Routes = [
    {
        path: '',
        component: ChampionsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PipesModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ChampionsPage, ChampionCardComponent],
    providers: [DdragonService]
})
export class ChampionsPageModule {
}
