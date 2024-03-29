import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';


const routes: Routes = [
  {
    path: '', 
    title: 'Home page',
    component: HomeComponent,
    children: [
      { path: '', component: CardComponent }
    ]
  },
  {
    path: 'details/:id',
    title: 'Details movie',
    component: DetailsComponent
  },
  {
    path: '**', 
    title: 'Page Not Found', 
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
