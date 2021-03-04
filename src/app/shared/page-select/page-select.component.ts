import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-select',
  templateUrl: './page-select.component.html',
  styleUrls: ['./page-select.component.css']
})
export class PageSelectComponent implements OnInit {

  private _elementsMax: number;
  private _buttonsMax: number;
  private _buttonsAdj: number;
  private _pageSelected: number;
  _elementsPerPage: number;
  
  @Input()
  set elementsMax(elementsMax: number) {
    this._elementsMax = elementsMax;
    this.calcPageNumbers();
  }
  @Input()
  set buttonsMax(buttonsMax: number) {
    this._buttonsMax = buttonsMax;
    this.calcPageNumbers();
  }
  @Input()
  set buttonsAdj(buttonsAdj: number) {
    this._buttonsAdj = buttonsAdj;
    this.calcPageNumbers();
  }
  @Input()
  set pageSelected(pageSelected: number) {
    this._pageSelected = pageSelected;
    this.calcPageNumbers();
  }
  @Input()
  set elementsPerPage(elementsPerPage: number) {
    this._elementsPerPage = elementsPerPage;
    this.calcPageNumbers();
  }
  @Input()
  elementsPerPageDefault: number;

  @Output()
  pageSelectedChange = new EventEmitter<number>();
  @Output()
  elementsPerPageChange = new EventEmitter<number>();

  // pageSelected: number;
  // elementsPerPage: number;

  pageNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this._pageSelected = 1;
    this._elementsPerPage = this.elementsPerPageDefault;

    // this.calcPageNumbers();
  }

  calcPageNumbers() {
    let pages = ~~(this._elementsMax / this._elementsPerPage);
    if (this._elementsMax % this._elementsPerPage != 0) {
      pages++;
    }

    this.pageNumbers.length = 0;


    let tempNumbers = []
    tempNumbers.push(1)  
    for (let i = this._pageSelected - this._buttonsAdj;
        i <= this._pageSelected + this._buttonsAdj; i++) {
      if (i < pages && i > 1) {
        tempNumbers.push(i);
      }
    }
    if (pages > 1) {
      tempNumbers.push(pages);
    }
    
    let l = null;
    for (let i of tempNumbers) {
      if (l) {
        if (i - l === 2) {
          this.pageNumbers.push(l + 1);
        } else if (i - l !== 1) {
          this.pageNumbers.push(-1);
        }
      }
      this.pageNumbers.push(i);
      l = i;
    }

  }

  onClicked(event) {
    // this.pageSelected = parseInt(event.target.value);
    // this.pageSelectedChange.emit(this.pageSelected);
    // this.calcPageNumbers();
    this.pageSelectedChange.emit(parseInt(event.target.value));
  }

  onChangePerPage(event) {
    // this.elementsPerPage = event.target.value;
    // this.elementsPerPageChange.emit(this.elementsPerPage)
    // this.calcPageNumbers();
    this.elementsPerPageChange.emit(event.target.value)
  }
  
}
