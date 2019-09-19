import { Component, OnDestroy, OnInit } from '@angular/core';
import { DummyDirective } from './dummy.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public datasource: { id: number, parentId: number; text: string; }[];
  
  public added = 0;
  public removed = 0;

  private size = 1000;
  private depth = 3;

  private interval;

  constructor() { }

  ngOnInit() {
    this.datasource = new Array(this.size)
      .fill(0)
      .map((_, i) =>  {
        let parentId = -1;

        if (i === 0 || i % this.depth === 0) {
          parentId = -1;
        } else {
          parentId = i - 1;
        }

        return ({ id: i, parentId, text: `node-${i}` });
      });

    this.interval = setInterval(() => {

      this.added = window[DummyDirective.addedKey];
      this.removed = window[DummyDirective.removeKey];

    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
