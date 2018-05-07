import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CodingModel } from '../component/coding/coding-model';
import { COLORS } from '../../assets/colors';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
declare const io: any;
// declare const ace: any; TODO: cursor movement
@Injectable()
export class CollaborationService {
  clientsInfo: Object = {};
  clientNum: number = 0;
  collaborationSocket: any;
  codeRoom: CodingModel;
  constructor(private httpClient: HttpClient, private router: Router) { }
  init(editor, sessionId): void {
    this.collaborationSocket = io(window.location.origin, { query: 'sessionId' + sessionId });
    // this.collaborationSocket.on('message', (message) => {
    //   console.log('message receive from server' + message);
    // });
    this.collaborationSocket.on('change', (delta: string) => {  // register a listener and receive data from server
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]); //  show on editor
    });
   // this.collaborationSocket.on('cursorMove', (cursor: string) => {  TODO: cursor movement
    //  console.log('cursor move' + cursor);
    //  const session = editor.getSession();
    //  cursor = JSON.parse(cursor);
    //  const x = cursor['row'];
     // const y = cursor['column'];
     // const changeClientId = cursor['socketId'];
     // console.log(x + ' ' + y + changeClientId);
//
     // if (changeClientId in this.clientsInfo) {
     //   session.removeMarker(this.clientsInfo[changeClientId]['marker']);
     // } else {
     //   this.clientsInfo[changeClientId] = {};
      //  const css = document.createElement('style');
     //   css.type = 'text/css';
     //   css.innerHTML = `.editor_cursor_${changeClientId}
     ///                   { 
     ////                     position:absolute;
                //          background:${COLORS[this.clientNum]};
    //                      z-index:100;
      //                    width:3px !important;
      //                  }`;
     //   document.body.appendChild(css);
    //    this.clientNum++;
    //  }
    //  const Range = ace.require('ace/range').Range;
   //   const newMarker = session.addMarker(new Range(x, y, x, y + 1), `editor_cursor_${changeClientId}`, true);
   //   this.clientsInfo[changeClientId]['marker'] = newMarker;
   // });
  }
  change(delta: string): void { // when change, send to server
    this.collaborationSocket.emit('change', delta);
  }
//  cursorMove(cursor: string) {
   // this.collaborationSocket.emit('cursorMove', cursor);
 // }
  restoreBuffer(): void {
    this.collaborationSocket.emit('restoreBuffer');
  }
  setNewRoom(roomNumber: string) {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.codeRoom = new CodingModel(roomNumber, true);
    this.httpClient.post('api/v1/coding', this.codeRoom, options)
    .subscribe((res: any) => {
     // console.log('123321');
      this.router.navigate(['/coding', res.roomNumber]);
    });
  }
  getRoomNumber(id: string): Promise<CodingModel> {
    return this.httpClient.get(`api/v1/coding/${id}`)
    .toPromise()
    .then((res: any) => res)
    .catch((e) => {
      alert(`This room doesn't exist`);
      this.router.navigate['/coding'];
      return Promise.reject(e.body || e);
    });
  }
  buildAndRun(data): Promise<any> {
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post('api/v1/result', data, options)
    .toPromise()
    .then((res => {
      console.log(res);
      return res;
    })).catch((e)=> {
      console.log(e);
    })
  }
}
