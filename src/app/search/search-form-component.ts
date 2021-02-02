import { Component, EventEmitter, Output } from "@angular/core";
import { NgModel } from "@angular/forms";
import { Button, TextField } from "@nativescript/core";
import { tap } from "rxjs/operators";

@Component({
  selector: "SearchForm",
  moduleId: module.id,
  template: `
    <TextField [(NgModel)]="textFieldValue" hint = "Ingrese Texto ..." > </TextField>
    <Button text="Buscar" (tap)="onButtonTap()" > </Button>
    `
})
export class SearchFormComponent {
  textFieldValue: string = "";
  @Output() search: EventEmitter<string> = new EventEmitter();

  onButtonTap(): void {
    console.log(this.textFieldValue);
    if (this.textFieldValue.length > 2) {
      this.search.emit(this.textFieldValue);
    }
  }
}