import { Component, OnInit } from '@angular/core';
import { Inputform } from '../inputform';

@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  quotations:Inputform[]= [{
    quote: "Lorem Ipsum dolor sit amet",author:"Anonymous",
    submitter:"Daniel"},
    {quote: "Lorem ipsum dolor sit amet", author: "Anonymous", submitter:"Daniel Mutua"},
    {quote: "Lorem ipsum dolor sit amet", author: "Anonymous", submitter:"Daniel Muthama"}
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

  constructor() { }

  ngOnInit(): void {
  }

}
