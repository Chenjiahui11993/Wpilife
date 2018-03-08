import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['./new-students.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewStudentsComponent implements OnInit {
  Indexs = [
    'Prelude',
    'Introduction',
    'Before come to America',
    'Flight',
    'After Arrival',
    'Life in WPI',
    'Come back to China',
    'Postscript',
    'Appendix',
    'Acknowledgments',
  ];
  selected = 'Prelude';
  constructor() { }

  ngOnInit() {
  }

}
