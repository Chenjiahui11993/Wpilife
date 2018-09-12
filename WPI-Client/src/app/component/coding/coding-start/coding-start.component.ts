import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollaborationService } from '../../../Service/collaboration.service';
@Component({
  selector: 'app-coding-start',
  templateUrl: './coding-start.component.html',
  styleUrls: ['../../product/product.component.css'
    , './coding-start.component.css']
})
export class CodingStartComponent implements OnInit {
  roomNumber: number;
  validRoomNumber = true;
  roomInput: string;
  constructor(private router: Router, private collaborationService: CollaborationService) { }
  ngOnInit() {
  }
  createRoom() {
    this.roomNumber = Math.floor(Math.random() * 10000);
    this.collaborationService.setNewRoom(this.roomNumber.toString());
  }
  joinRoom() {
    this.collaborationService.getRoomNumber(this.roomInput)
      .then((res: any) => {
        if (res !== null) {
          let room = res.roomNumber;
          this.router.navigate(['/coding', room]);
        } else {
          this.validRoomNumber = false;
        }
      });
  }
}
