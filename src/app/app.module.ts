import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserPipe } from 'src/pipe/user.pipe';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

export const appRoutes: Routes = [
  {
    path:'',
    component: AppComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
