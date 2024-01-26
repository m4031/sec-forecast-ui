
export class NewsSubscription {
  public subscriptionId: string | undefined;
  public name: string | undefined;
  public email: string | undefined;
  
  constructor(subscriptionId?: string, name?: string, email?: string){
        this.subscriptionId = subscriptionId;
        this.name = name;
        this.email = email;
  }

}
