import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit, AfterContentInit {

  private selectionValue: any;

  @Output() selectionChange = new EventEmitter<any>();

  @Input()
  set selection(value: any) {
    this.selectionValue = value;
    this.selectionChange.emit(this.selectionValue);
  }

  get selection(): any {
    return this.selectionValue;
  }

  constructor() { }

  ngOnInit() {
    console.log('OnInit ' + this.selectionValue);
  }

  ngAfterContentInit() {
    console.log('AfterContentInit ' + this.selectionValue);
  }

}