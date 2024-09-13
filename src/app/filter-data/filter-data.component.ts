import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-data',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './filter-data.component.html',
  styleUrl: './filter-data.component.css'
})
export class FilterDataComponent {
  @Output()
  public onChangeOrder : EventEmitter<null> = new EventEmitter();

  @Output()
  public onChangeFilter : EventEmitter<string> = new EventEmitter();

  public filter: string = "name";

  public changeOrder(): void {
    this.onChangeOrder.emit();
  }

  
}
