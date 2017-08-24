import {DirectoryComponent } from './directory/directory.component';
import {HomeComponent } from './home/home.component';
import { RouterModule , Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path : 'directory',
        component : DirectoryComponent
    },
    {
        path : '',
        component : HomeComponent
    },
    
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class appRoutingModule {

}