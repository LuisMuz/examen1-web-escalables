import { Component, inject, OnInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardsViewComponent } from '../../components/cards-view/cards-view.component';
import { CreateCardComponent } from '../../components/create-card/create-card.component';
import { FilterDataComponent } from '../../components/filter-data/filter-data.component';
import { Show } from '../../model/show';
import { TvShowsService } from '../../services/tv-shows.service';


@Component({
  selector: 'app-tv-shows',
  standalone: true,
  imports: [
    RouterOutlet, NgbNavModule,
    CommonModule, CardsViewComponent, CreateCardComponent,
    FormsModule, ReactiveFormsModule,
    FilterDataComponent],
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.css'
})
export class TvShowsComponent {

  private tvShowService = inject(TvShowsService);
  public showToEdit : boolean = false;
  public editForm: FormGroup;

  public get Text() : string {
    return this.tvShowService.text;
  }

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      year: ['', Validators.required],
      episodes: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  public loadShowToEdit(show: Show): void {
    this.tvShowService.loadShowToEdit(show);
    this.editForm.patchValue(show);
    this.showToEdit = true;
  }

  public onSubmitEdit(): void {
    this.tvShowService.onSubmitEdit(this.editForm);
    this.showToEdit = false;
  }

  public cancelEdit(): void {
    this.tvShowService.cancelEdit();
    this.showToEdit = false;
  }


  public invertOrder(): void {
    this.tvShowService.invertOrder();
  }

  public deleteCard(name : string) : void {
    this.tvShowService.deleteCard(name);
    console.log('Card deleted');
  }

  public createElement(show : Show): void {
    this.tvShowService.createElement(show);
  }

  public changeOrder(): void {
    this.tvShowService.changeOrder();
  }

  public changeFilter(order: string): void {
    this.tvShowService.changeFilter(order);
  }

  public sort_shows(): void {
    this.tvShowService.sort_shows();
  }

  public get shows() : Show[] {
    return this.tvShowService.shows;
  }
}
