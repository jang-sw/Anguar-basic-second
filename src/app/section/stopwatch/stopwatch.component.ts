import { Component } from '@angular/core';
import { PageToggleService } from '../../share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss',
  //providers: [PageToggleService], // 자식 까지 사용 가능
})
export class StopwatchComponent {
  present = '';
  constructor(private pageToToggle: PageToggleService){

  }
  startTime(num: string){ 
    this.present=num;
  }
  goClock(){
    this.pageToToggle.goPage('/clock')
  }

}
