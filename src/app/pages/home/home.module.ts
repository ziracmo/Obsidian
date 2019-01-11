import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import {ChampionggService} from '../../services/championgg.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
    {
        path: '',
        component: HomePage
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
    declarations: [HomePage],
    providers: [ChampionggService]
})
export class HomePageModule {
}
