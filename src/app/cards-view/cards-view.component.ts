import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../model/show';

@Component({
  selector: 'app-cards-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-view.component.html',
  styleUrl: './cards-view.component.css'
})
export class CardsViewComponent {

  @Output() 
  public deleteCard : EventEmitter<string> = new EventEmitter();

  @Output()
  public editCard: EventEmitter<Show> = new EventEmitter(); 


  @Input()
  public show: Show = {
    name: 'Default',
    description: 'A high school chemistry teacher turned meth maker partners with a former student to secure his family\'s future.',
    image: 'https://hipermediaciones.com/wp-content/uploads/2013/10/21225_breaking_bad.jpg',
    year: 2008,
    episodes: 62,
    genre: 'Crime, Drama, Thriller',
    likes: []
  } 

  public editCardDetails(): void {
    this.editCard.emit(this.show); 
  }

  public is_selected: boolean = false;

  public changeSelected(): void {
    this.is_selected = !this.is_selected;
    console.log(this.is_selected);
  }
}
