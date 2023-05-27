import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      counter works!
    </p>
  `,
  styles: [

  ]
})
export class CounterComponent {

  public counter : number = 0;

  my_increment(){
      this.counter++;
  }
  my_decrement(){
      if (this.counter > 0) {
      this.counter--;
      }
  }

}
