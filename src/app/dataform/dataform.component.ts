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
  data!: any;
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
    this.inputform.upVote=this.upvotes;
    this.inputform.downVote=this.downvotes;
    

    this.inpforms.push(this.inputform)
  }

  uvotes: number=0;
  dvotes: number=0;
  upVote(){
    return this.uvotes++;
  }
  downVote(){
    return this.dvotes++;
  }

  show(){
    
  }

  deleteQuote() {
    const index: number = this.data.indexOf(this.inputform);
    if (this.dvotes && this.uvotes !== -1) {
        this.data.splice(index, 1);
    }        
}


}
