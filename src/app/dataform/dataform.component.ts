import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.css']
})


export class DataformComponent implements OnInit {
  constructor() { 

  }

  ngOnInit(): void {
  }

  log(x?: any) {
    console.log(x);
  }
}
