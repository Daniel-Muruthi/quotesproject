import { Component, OnInit } from '@angular/core';
import { Inputform } from '../inputform';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  quotations:Inputform[]= [{
    quote: "The way to get started is to quit talking and begin doing",author:"Walt Disney",
    submitter:"Daniel Muruthi"},
    {quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ", author: "James Cameron", submitter:"Adino Muruthi"},
    {quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson", submitter:"Jara-El"}
  ];

  
  uvotes: number=0;
  dvotes: number=0;
  upvote(){
    if (this.uvotes>=0){
      this.uvotes+=1;
    }else{
      this.uvotes=0;
    }
  }
  downvote(){
    if (this.dvotes>=0){
      this.dvotes+=1;
    }else{
      this.dvotes=0;
    }
  }
  delete(){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
