import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDiplayComponent } from './time-diplay/time-diplay.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TimeDiplayComponent,
    ButtonsComponent,
    StopwatchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    
    StopwatchComponent,
  ]
})
export class TimerModule { }
