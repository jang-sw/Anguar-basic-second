import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-time-diplay',
  templateUrl: './time-diplay.component.html',
  styleUrl: './time-diplay.component.scss'
})
export class TimeDiplayComponent implements OnChanges {
  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  @Input() inputData: string='';

  interval: any = null;
  constructor(){
  }

  timeControl(action: string){
    if(action == 'start'){
      this.interval= setInterval(()=>{
        this.ms++;
        if(this.ms >= 100){
          this.ms = 0;
          this.sec++;
          if(this.sec >= 60){
            this.min++;
          }
        }
      },10)
    } else if(action == 'stop'){
      clearInterval(this.interval);
      this.interval = null;
    }else if(action == 'reset'){
      clearInterval(this.interval);
      this.interval = null;
      this.ms = 0;
      this.sec = 0;
      this.min = 0
    }
  }


  ngOnChanges(changes:SimpleChanges){
    
      for(let propName in changes){
        if(propName == 'inputData'){
          this.timeControl(this.inputData);
        }
      }

    
  }

  
}
