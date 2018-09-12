import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '../../Service/collaboration.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Output } from '@angular/core/src/metadata/directives';
declare const ace: any;
@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css',
    '../product/product.component.css']
})
export class CodingComponent implements OnInit {
  editor: any;
  roomValid = true;
  showButton = true;
  sessionId: string;
  languages: string[] = ['Java', 'Python'];
  language = 'Java';
  defaultContent = {
    Java: `public class Example {
      public static void main(String[] args) {
          // Type your Java code here
          //Sample codes:
        //  int a = 3;
        //  int b = 4;
        //  int c = add(a, b);
        //  System.out.println(c);

      }
      // 	public static int add(int a, int b) {
      //    return a+b ;
      //   }
    }`,
    Python: `class Solution:
    def example():
         #Write your Python code here
       #  print(1 + 2)
  #  example()`

  };
  output = '';
  constructor(private collaborationService: CollaborationService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.params
      .subscribe(params => {
        this.sessionId = params['id'];
        console.log(this.sessionId);
      });
    this.collaborationService.getRoomNumber(this.sessionId)
      .then((res) => {
        if (res === null) {
          alert(`This coding room doesn't exsit and data would not be save, pleaes return and create a room thx`);
          this.roomValid = false;
        }
      });
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.resetEditor();
    this.editor.$blockScrolling = Infinity;
    this.collaborationService.init(this.editor, this.sessionId);
    this.editor.lastAppliedChange = null;
    this.editor.on('change', (e) => {
      // console.log('editor change' + JSON.stringify(e));
      if (this.editor.lastAppliedChange !== e) {
        this.collaborationService.change(JSON.stringify(e));
      }
    });
    //  this.editor.getSession().getSelection().on('changeCursor', ()=> {
    //  const cursor = this.editor.getSession().getSelection().getCursor();
    //   console.log('curser move log from client ' + JSON.stringify(cursor));
    //   this.collaborationService.cursorMove(JSON.stringify(cursor));
    // });
    this.collaborationService.restoreBuffer(); // load previous data 
  }
  setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();
  }
  submit() {
    this.output = '';
    this.showButton = false;
    const userCode = this.editor.getValue();
    const data = {
      userCodes: userCode,
      lang: this.language.toLocaleLowerCase()
    };
    this.collaborationService.buildAndRun(data)
      .then(res => {
        this.output = res.text;
        this.showButton = true;
      });
  }
  resetEditor() {
    this.editor.setValue(this.defaultContent[this.language]);
    this.editor.getSession().setMode(`ace/mode/${this.language.toLocaleLowerCase()}`);
  }
}
