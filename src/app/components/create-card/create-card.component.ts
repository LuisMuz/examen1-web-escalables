import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, NgForm } from '@angular/forms';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Show } from '../../model/show';

@Component({
  selector: 'app-create-card',
  standalone: true,
  imports: [
    FormsModule, ReactiveFormsModule,
    NgbNavModule, CommonModule 
  ],
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.css'
})
export class CreateCardComponent {
  public isSubmitted : boolean = false;

  @Output()
  public createCard : EventEmitter<Show> = new EventEmitter();

  public onFormSubmit(form : NgForm): void {
    console.log(form.value);
    this.isSubmitted = true;
    if(form.valid){
      // console.log(form.value);
      const newShow: Show = {
        name: form.value.name,
        year: 2021,
        episodes: 1,
        image: form.value.image,
        description: form.value.desc,
        genre: "Dunno",
        likes: []
      }
      this.createCard.emit(newShow);
      form.reset();
      this.isSubmitted = false;
    }else{
      console.log("faltan datos")
    }
  }
}
