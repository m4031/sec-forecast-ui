
export class Faq{

  public question: string | undefined;
  public answer : string | undefined;
 
  constructor(question?: string, answer?: string){
        this.question = question;
        this.answer = answer;        
  }  
}
