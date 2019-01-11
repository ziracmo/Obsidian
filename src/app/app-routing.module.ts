import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', loadChildren: './molecules/tabs/tabs.module#TabsPageModule'},
    {path: 'champion/:id', loadChildren: './pages/champion-information/champion-information.module#ChampionInformationPageModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
