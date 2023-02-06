import { Component, OnInit } from '@angular/core';

const ROW_HEIGHTS: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  cols: number = 3;
  rowHeight: number = ROW_HEIGHTS[this.cols];
  category: string | undefined = undefined;
  constructor() {}

  ngOnInit(): void {}

  columnCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHTS[this.cols];
  }
  onShowCategory(category: string): void {
    this.category = category;
  }
}
