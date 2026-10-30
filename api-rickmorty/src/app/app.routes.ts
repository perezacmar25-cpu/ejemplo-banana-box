import { Routes } from '@angular/router';
import { RickyListComponent } from './components/ricky-list-component/ricky-list-component';

export const routes: Routes = [

    {path: 'ricky-list',component:RickyListComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'ricky-list'}
];
