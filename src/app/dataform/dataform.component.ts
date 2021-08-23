import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Inputform } from '../inputform';

// jina = fixture.debugElement.queryAll(By.css('.identity'));
// identity = jina[0].nativeElement;
// quotebody: FormGroup;
// identity: FormControl;
// inputquote:FormControl;
// authorName: FormControl;
@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})

export class DataformComponent implements OnInit {
  constructor(

  ) { 

  }

  ngOnInit(){
    // this.createFormControls();
    // this.createForm();
  }

  // createFormControls(){
  //   this.identity = new FormControl('', Validators.required);
  //   this.inputquote = new FormControl("", Validators.required);
  //   this.authorName = new FormControl("", Validators.required);
  // }
  // createForm(){
  //   this.quotebody = new FormGroup({
  //     identity: this.identity,
  //     inputquote: this.message,
  //     authorName: this.authorName

  //   })
  // }
  log(x?: any){
    console.log(x);
  }
  // onSubmit(){
  //   if(this.quotesbody.valid){

  //     identity==submitter;
  //     inputquote==quote;
  //     authorName==author;

  //   }
  // }

  quote = new Inputform();
}
