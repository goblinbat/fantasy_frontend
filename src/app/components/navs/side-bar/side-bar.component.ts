import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder,FormGroup} from '@angular/forms';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  explore: true;
  profile: false;
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      fixed: false,
      top: 0
    });
  }

  shouldRun = true;
  ngOnInit() {
  }

}
