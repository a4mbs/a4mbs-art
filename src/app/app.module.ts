import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetsModule } from './widgets/widgets.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    WidgetsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
