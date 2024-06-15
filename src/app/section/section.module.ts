import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { TimeDiplayComponent } from './timer/time-diplay/time-diplay.component';
import { ButtonsComponent } from './timer/buttons/buttons.component';
import { TimerModule } from './timer/timer.module';
import { RouterModule, Routes} from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';
import { PageToggleService } from '../share/page-toggle.service';

const routes: Routes = [
  {
    path:'stopwatch',
    pathMatch: 'full',
    component:StopwatchComponent,
  },
  {
    path:'clock',
    pathMatch: 'full',
    component:ClockComponent,
  },
];

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
  ],
  imports: [
    CommonModule,
    TimerModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    SectionComponent,
    RouterModule,
  ],
 /** providers:[
    PageToggleService
  ] */
})  
export class SectionModule { }
 