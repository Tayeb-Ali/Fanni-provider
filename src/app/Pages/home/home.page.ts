import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { AnimationController, NavController } from "@ionic/angular"

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  // @ViewChild("button", { read: ElementRef, static: true }) button: ElementRef
  @ViewChildren('ion-item', { read: ElementRef }) items: QueryList<ElementRef>;

  appoinmentbutton: any = 'new';
  data: any;
  animateAppoinment ='animate__bounceIn'
  constructor(
    private animationCtrl: AnimationController,
    public navController: NavController) {

    this.data = [
      { name: "علي حسن", type: "سباكة", date: "12-10-2020" },
      { name: "عمر امين", type: "تكيف", date: "13-11-2020" },
      { name: "حسن عبدالله", type: "كهرباء", date: "10-10-2020" },
      { name: "اسامة الحاج", type: "مراجعة", date: "09-09-2020" },
    ]
  }

  appoinment() {
    // console.log(event.details.value)
    switch (this.appoinmentbutton) {
      case 'new':
        // alert('new')
        break;

      case 'old':
        // alert('old');
        // default:
        //   alert('error');
        break;
    }
  }

  // ngAfterViewInit() {
  // }



  public pushAppoinment(id) {
    this.navController.navigateForward('/appoinment-details/' + id);
  }

  animateItems() {
    let elements = this.items.toArray();
    elements.map(elem => {
      return elem.nativeElement.classList.add('zoomOutRight')
    })
  }
  appoinmentClick(){
    this.animateAppoinment= 'animate__pulse';
  }
}
