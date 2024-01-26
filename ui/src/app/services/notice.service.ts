import { Injectable } from '@angular/core';
import { ForecastPrice } from '../models/foreast-price.model';
import { Notice } from '../models/notice.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  notices: Notice[];

  constructor() { }

  public noticeSummary: string | undefined;
  public noticeDetails : string | undefined;
  public startDate: string | undefined;
  public createDate: string | undefined;
  public updateDate: string | undefined;

  public getNoticeDetails() : Notice[]{
    if (this.notices == null){
      this.notices = this.initilizeNotices()      
    }
    return this.notices
  }

  private initilizeNotices(){
    return [
      {
        noticeSummary: 'Home Loan Interest rates reduced',        
        noticeDetails: 'Home loan interest rates are reduced as per the goverment guidelines. The updated rates will be effective immediately',
        startDate: '2021-08-20',
        lastClosePrice: '2021-08-28',
        createDate: '2021-08-27',
        updateDate: '2021-08-28'
      },
      {
        noticeSummary: 'Home Loan Interest rates reduced',        
        noticeDetails: 'Home loan interest rates are reduced as per the goverment guidelines. The updated rates will be effective immediately',
        startDate: '2021-08-20',
        lastClosePrice: '2021-08-28',
        createDate: '2021-08-27',
        updateDate: '2021-08-28'
      },
      {
        noticeSummary: 'Home Loan Interest rates reduced',        
        noticeDetails: 'Home loan interest rates are reduced as per the goverment guidelines. The updated rates will be effective immediately',
        startDate: '2021-08-20',
        lastClosePrice: '2021-08-28',
        createDate: '2021-08-27',
        updateDate: '2021-08-28'
      },
      {
        noticeSummary: 'Home Loan Interest rates reduced',        
        noticeDetails: 'Home loan interest rates are reduced as per the goverment guidelines. The updated rates will be effective immediately',
        startDate: '2021-08-20',
        lastClosePrice: '2021-08-28',
        createDate: '2021-08-27',
        updateDate: '2021-08-28'
      },
      {
        noticeSummary: 'Home Loan Interest rates reduced',        
        noticeDetails: 'Home loan interest rates are reduced as per the goverment guidelines. The updated rates will be effective immediately',
        startDate: '2021-08-20',
        lastClosePrice: '2021-08-28',
        createDate: '2021-08-27',
        updateDate: '2021-08-28'
      },
      {
        noticeSummary: 'Home Loan Interest rates reduced',        
        noticeDetails: 'Home loan interest rates are reduced as per the goverment guidelines. The updated rates will be effective immediately',
        startDate: '2021-08-20',
        lastClosePrice: '2021-08-28',
        createDate: '2021-08-27',
        updateDate: '2021-08-28'
      }
    ];
  }

  public getNotices() : Promise<Awaited<Notice[]>> {
    return Promise.resolve(this.getNoticeDetails());
  }
}
