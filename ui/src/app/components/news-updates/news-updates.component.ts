import { Component } from '@angular/core';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-news-updates',
  templateUrl: './news-updates.component.html',
  styleUrls: ['./news-updates.component.scss']
})
export class NewsUpdatesComponent {
  notices = new Array();
  constructor(private noticeService: NoticeService) { }

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
    this.notices = this.noticeService.getNoticeDetails()
  }
}
