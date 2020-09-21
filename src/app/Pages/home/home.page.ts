import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  appoinmentbutton: any = 'new';
  data: any;
  constructor() { 
    this.data = [
      {name: "علي حسن", type: "سباكة", date: "12-10-2020"},
      {name: "عمر امين", type: "مكيف مياه", date: "13-11-2020"},
      {name: "حسن الترابي", type: "تصحيح مفاهيم", date: "10-10-2020"},
      {name: "اسامة لادن", type: "اصلاح  سلاح", date: "09-09-2020"},
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
}
