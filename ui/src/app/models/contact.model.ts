
export class Contact {

  public date: number | undefined;
  public contactId: string | undefined;
  public name: string | undefined;
  public email: string | undefined;
  public subject: string | undefined;
  public message: string | undefined;
  
  constructor(date?: number, contactId?: string, name?: string, email?: string, subject?: string, message?: string) {
        this.date = date
        this.contactId = contactId;
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;        
  }

}
