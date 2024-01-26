
export class Notice{

  public noticeSummary: string | undefined;
  public noticeDetails : string | undefined;
  public startDate: string | undefined;
  public createDate: string | undefined;
  public updateDate: string | undefined;


  constructor(noticeSummary?: string, noticeDetails?: string, startDate?: string,  createDate?: string, updateDate?: string){
        this.noticeSummary = noticeSummary;
        this.noticeDetails = noticeDetails;
        this.startDate = startDate;
        this.createDate = createDate;
        this.updateDate = updateDate;
  }

  
}
