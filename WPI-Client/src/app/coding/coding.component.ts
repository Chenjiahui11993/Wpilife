import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '../Service/collaboration.service';
import { ActivatedRoute, Params } from '@angular/router';
declare const ace: any;
@Component({
  selector: 'app-coding',
  templateUrl: './coding.component.html',
  styleUrls: ['./coding.component.css',
    '../component/product/product.component.css']
})
export class CodingComponent implements OnInit {
  editor: any;
  sessionId: string;
  languages: string[] = ['Java', 'Python'];
  language = 'Java';
  defaultContent = {
    Java: `public class Example {
      public static void main(String[] args) {
          // Type your Java code here
      }
    }`,
    Python: `class Solution:
    def example():
         #Write your Python code here`
  };
  constructor(private collaborationService: CollaborationService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
      .subscribe(params => {
        this.sessionId = params['id'];
      });
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/eclipse');
    this.resetEditor();
    this.collaborationService.init(this.editor, this.sessionId);
    this.editor.lastAppliedChange = null;
    this.editor.on('change', (e) => {
      // console.log('editor change' + JSON.stringify(e));
      if (this.editor.lastAppliedChange !== e) {
        this.collaborationService.change(JSON.stringify(e));
      }
    });
    this.collaborationService.restoreBuffer(); // load previous data
  }
  setLanguage(language: string): void {
    this.language = language;
    this.resetEditor();
  }
  submit() {
    const userCode = this.editor.getValue();
    console.log(userCode);
  }
  resetEditor() {
    this.editor.setValue(this.defaultContent.Java);
    this.editor.getSession().setMode(`ace/mode/${this.language.toLowerCase()}`);
  }

}
