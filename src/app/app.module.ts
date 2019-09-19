import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxTreeListModule, DxTreeViewModule } from 'devextreme-angular';
import { AppComponent } from './app.component';
import { DummyDirective } from './dummy.directive';

@NgModule({
  declarations: [
    AppComponent,
    DummyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DxTreeViewModule,
    DxTreeListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
