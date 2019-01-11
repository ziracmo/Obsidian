import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ChampionInformationPage} from './champion-information.page';
import {HttpClientModule} from '@angular/common/http';
import {DdragonService} from '../../services/ddragon.service';

const routes: Routes = [
    {
        path: '',
        component: ChampionInformationPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ChampionInformationPage],
    providers: [DdragonService]
})
export class ChampionInformationPageModule {
}
