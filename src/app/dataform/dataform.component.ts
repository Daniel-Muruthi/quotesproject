import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Inputform } from '../inputform';

@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})

export class DataformComponent implements OnInit {
  vote!: number;
  dvote!: number;
  uvote!: number;
  inputquote!: string;
  authorName!: string;
  identity!: string;
  inputform!: Inputform;

  upvotes:number=0;
  downvotes:number=0;

  inpforms: Inputform[]=[]
  constructor() {
    this.inputform={}
    this.inpforms.push(this.inputform)
  }

  ngOnInit(){

  }

  addQuote(){
    this.inputform={}
    this.inputform.quote=this.inputquote;
    this.inputform.author=this.authorName;
    this.inputform.submitter=this.identity;

    this.inpforms.push(this.inputform)
  }

  uvotes: number=0;
  dvotes: number=0;
  upVote(){
    if (this.uvotes>=0){
      this.uvotes+=1;
    }else{
      this.uvotes=0;
    }
  }
  downVote(){
    if (this.dvotes>=0){
      this.dvotes+=1;
    }else{
      this.dvotes=0;
    }
  }
  deleteQuote(){
    
  }
  show(){
    
  }




}
