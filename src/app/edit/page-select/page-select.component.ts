import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-select',
  templateUrl: './page-select.component.html',
  styleUrls: ['./page-select.component.css']
})
export class PageSelectComponent implements OnInit {

  private _elementsMax: number;  
  @Input()
  set elementsMax(elementsMax: number) {
    this._elementsMax = elementsMax;
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

    this.calcPageNumbers();
  }

  calcPageNumbers() {
    let pages = (~~(this._elementsMax / this.elementsPerPage));
    if (this._elementsMax % this.elementsPerPage != 0) {
      pages++;
    }

    this.pageNumbers.length = 0;
    for (let i = 0; i < pages; i++) {
      this.pageNumbers.push(i + 1);
    }
  }

  onClicked(event) {
    this.pageSelected = parseInt(event.target.value);
    this.pageSelectedChange.emit(this.pageSelected);
  }

  onChangePerPage(event) {
    this.elementsPerPage = event.target.value;
    this.elementsPerPageChange.emit(this.elementsPerPage)
    this.calcPageNumbers();
  }
  
}
