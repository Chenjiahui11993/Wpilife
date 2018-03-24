import { Injectable } from '@angular/core';

declare const io: any;
@Injectable()
export class CollaborationService {
  collaborationSocket: any;
  constructor() { }
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
  }
  change(delta: string): void { // when change, send to server
    this.collaborationSocket.emit('change', delta);
  }
  restoreBuffer(): void {
    this.collaborationSocket.emit('restoreBuffer');
  }
}
