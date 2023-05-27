import { Component, AfterViewInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-child-view-children',
  templateUrl: './view-child-view-children.component.html',
  styleUrls: ['./view-child-view-children.component.css']
})
export class ViewChildViewChildrenComponent implements AfterViewInit {
  constructor(){}

  // Child
  @ViewChild("sande") san : any;

  // Children
  @ViewChildren("deep") sk : any;

  ngAfterViewInit(){

    // Child
    console.log(this.san);
    this.san.nativeElement.style.color = "orange";

    // Children
    console.log(this.sk);
    this.sk.first.nativeElement.style.color = "green";
    this.sk.last.nativeElement.style.color = "lightgreen";

  }

  // ======================
    // add child inside component element
    @ViewChild('sandeep') sp : any;

    inc(){
      this.sp.my_increment();
    }

    dec(){
      this.sp.my_decrement();
    }

}
