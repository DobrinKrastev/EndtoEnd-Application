import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'', component:HomeComponent}, 
{path:'home',component: HomeComponent},
{path:'dashboard', component: BookListComponent},
{path:'dashboard/details/:bookId', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
