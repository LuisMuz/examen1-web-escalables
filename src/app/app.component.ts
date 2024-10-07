import { Component  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsComponent } from "./pages/tv-shows/tv-shows.component";
import { HomeComponent } from "./pages/home/home.component";
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    TvShowsComponent,
    HomeComponent,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage: string = "home";

  isSidebarOpen: boolean = false; 

  navigate(page: string): string {
    this.currentPage = page;
    return page;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen; 
  }
}