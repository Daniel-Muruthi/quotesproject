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
    {quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.", author: "Robert Louis Stevenson", submitter:"Jara-El"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall. ", author: "Nelson Mandela", submitter:"Moses"},
    {quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", author: "Steve Jobs", submitter:"Jenny"},
    {quote: "Life is what happens when you're busy making other plans.", author: "John Lennon", submitter:"Fatma"},
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Julie", submitter:"sammy"}
  ];

  
  

  constructor() { }

  ngOnInit(): void {
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
}
