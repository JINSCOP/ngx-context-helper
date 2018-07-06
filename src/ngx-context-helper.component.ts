import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngx-context-helper',
  // templateUrl: './ngx-context-helper.component.html',
  template: `
    <p>
        ngx-context-helper works!
    </p>
    <div>
        {{dataSource.title}}
    </div>
    <div>
        {{dataSource.content}}
    </div>
  `,
  // styleUrls: ['./ngx-context-helper.component.css']
})
export class NgxContextHelperComponent implements OnInit {

  @Input() dataSource: any;
  @Input() settings: any;

  @Output() test = new EventEmitter<any>();

  constructor() { 
    if (this.dataSource == undefined) {
      this.dataSource = {
        title: "帮助测试",
        content: "帮助的内容"
      }
    }
  }

  ngOnInit() {
  }

}
