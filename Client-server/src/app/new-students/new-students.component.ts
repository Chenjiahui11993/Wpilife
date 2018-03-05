import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-students',
  templateUrl: './new-students.component.html',
  styleUrls: ['../product/product.component.css',
              './new-students.component.css']
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
