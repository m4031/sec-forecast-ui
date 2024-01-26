import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutDetails = new Array();
  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    // this.noticeService.getNoticeDetails().subscribe(
    //   responseData => {
    //   this.notices = <any> responseData.body;
    //   // this.notices.forEach(function (card) {
    //   //   this.currOutstandingAmt = this.currOutstandingAmt+card.availableAmount;
    //   // }.bind(this));      
    //   }, error => {
    //     console.log(error);
    //   });
    this.aboutDetails = this.aboutService.getAboutDetails();
  }
 
}
