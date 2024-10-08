import { Component, inject } from '@angular/core';
import { TvShowsService } from '../../services/tv-shows.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private tvShowService = inject(TvShowsService);

  public get Text() : string {
    return    this.tvShowService.text;
  }

}
