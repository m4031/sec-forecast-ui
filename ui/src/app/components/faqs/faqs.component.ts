import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/services/faq.service';


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent implements OnInit {
  faqs = new Array();
  constructor(private faqService: FaqService) { }

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
    this.faqs = this.faqService.getFaqDetails();
  }

}
