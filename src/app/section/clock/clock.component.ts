import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.scss'
})
export class ClockComponent implements OnInit {

  date: Date = new Date();

  ngOnInit(): void {
    setInterval(()=>{this.date = new Date()}, 1000)
  }

}
