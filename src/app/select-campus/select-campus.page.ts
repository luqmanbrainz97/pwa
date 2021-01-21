import { Component, OnInit } from '@angular/core';
import { db } from 'database/database';

@Component({
  selector: 'app-select-campus',
  templateUrl: './select-campus.page.html',
  styleUrls: ['./select-campus.page.scss'],
})
export class SelectCampusPage implements OnInit {
  universities:any;
  constructor() { }

  ngOnInit() {
    let loadedData = db.loadDB();
    // console.log(loadedData.data);
    this.universities = Array.from(loadedData.data);
  }
}
