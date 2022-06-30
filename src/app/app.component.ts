import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="example-wrapper">
            <kendo-dropdownlist
                [data]="data"
                [filterable]="true"
                textField="text"
                valueField="value"
                (filterChange)="handleFilter($event)"
            >
            </kendo-dropdownlist>
        </div>
    `,
    styles: [`
        kendo-dropdownlist {
            width: 170px;
        }
    `]
})
export class AppComponent {
    public source: Array<{ text: string, value: number }> = [
        { text: 'Small', value: 1 },
        { text: 'Medium', value: 2 },
        { text: 'Large', value: 3 }
    ];

    public data: Array<{ text: string, value: number }>;

    constructor() {
        this.data = this.source.slice();
    }

    handleFilter(value) {
        this.data = this.source.filter((s) => s.text.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
}
