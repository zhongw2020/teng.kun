

import { Component } from '@angular/core';
import { STColumn, STData } from '@delon/abc';
import { XlsxService } from '@delon/abc/xlsx';

@Component({
  selector: 'components-xlsx-export',
  template: `
    <button nz-button (click)="download()">Export</button>
    <st [data]="users" [ps]="3" [columns]="columns" class="mt-sm"></st>
  `,
})
export class OutTestComponent {
  constructor(private xlsx: XlsxService) { }

  users: STData[] = Array(100)
    .fill({})
    .map((_, idx) => ({
      id: idx + 1,
      name: `name ${idx + 1}`,
      age: Math.ceil(Math.random() * 10) + 20,
    }));
  columns: STColumn[] = [
    { title: '编号', index: 'id', type: 'checkbox' },
    { title: '姓名', index: 'name' },
    { title: '年龄', index: 'age' },
  ];

  download(): void {
    const data = [this.columns.map(i => i.title)];
    this.users.forEach(i => data.push(this.columns.map(c => i[c.index as string])));
    this.xlsx.export({
      sheets: [
        {
          data,
          name: 'sheet name',
        },
      ],
    });
  }
}
