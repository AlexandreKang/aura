import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'table', component: DatabaseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
