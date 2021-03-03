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
  elementsPerPageDefault: number;

  @Output()
  pageSelectedChange = new EventEmitter<number>();
  @Output()
  elementsPerPageChange = new EventEmitter<number>();

  pageSelected: number;
  elementsPerPage: number;

  pageNumbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pageSelected = 1;
    this.elementsPerPage = this.elementsPerPageDefault;

    // this.calcPageNumbers();
  }

  calcPageNumbers() {
    let pages = ~~(this._elementsMax / this.elementsPerPage);
    if (this._elementsMax % this.elementsPerPage != 0) {
      pages++;
    }

    this.pageNumbers.length = 0;


    let tempNumbers = []
    tempNumbers.push(1)  
    for (let i = this.pageSelected - this._buttonsAdj;
        i <= this.pageSelected + this._buttonsAdj; i++) {
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
    this.pageSelected = parseInt(event.target.value);
    this.pageSelectedChange.emit(this.pageSelected);
    this.calcPageNumbers();
  }

  onChangePerPage(event) {
    this.elementsPerPage = event.target.value;
    this.elementsPerPageChange.emit(this.elementsPerPage)
    this.calcPageNumbers();
  }
  
}
