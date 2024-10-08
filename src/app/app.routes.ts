import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "tvshows", component: TvShowsComponent},
  {path: "", component: HomeComponent},
  {path: "not-found", component: NotFoundComponent},
  {path: "**", redirectTo: "not-found", pathMatch:"full"},
];
