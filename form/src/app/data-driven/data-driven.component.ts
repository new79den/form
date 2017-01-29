import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'fm-data-driven',
  templateUrl: './data-driven.component.html',
})
export class DataDrivenComponent {
myForm : FormGroup;


  constructor(private formBuilder: FormBuilder) {
   /* this.myForm = new FormGroup({
      "userData": new FormGroup({
        'username': new FormControl("Max", Validators.required),
        'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      }),
      'password': new FormControl('', Validators.required),
    });*/

    this.myForm =  formBuilder.group({
      "userData": formBuilder.group({
        'username': ["Max", [Validators.required , this.exampleValidator]],
        'email': ['', [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
      }),
      'password': ['', Validators.required],
    });
  }

  onSubmit(){
    console.log(this.myForm);
  }

  exampleValidator(control: FormControl): {[s: string] : boolean}{
    if( control.value === 'Expamle'){
      return {example: true}
    }
    return null;
  }
}
