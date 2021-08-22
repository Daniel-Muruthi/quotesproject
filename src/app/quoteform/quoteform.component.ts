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

  votes: number=0;


  constructor() { }

  ngOnInit(): void {
  }

}
