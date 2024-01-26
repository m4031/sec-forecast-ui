import { Injectable } from '@angular/core';
import { Faq } from '../models/faq.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  faqs: Faq[];
  
  constructor() { }
  
  public getFaqDetails() : Faq[]{
    if (this.faqs == null){
      this.faqs = this.initilizeFaqInfo()      
    }
    return this.faqs
  }

  private initilizeFaqInfo(){
    return [
      {
        question: 'Machine Leaning services',        
        answer: 'We do offer various Machine Leaning services utilizing various machine learning algoriths accounting to business use case.',        
      },
      {
        question: 'Deep Leaning services',        
        answer: 'We do offer various Deep Leaning services utilizing various Neural networks algoriths accounting to business use case.',        
      },
      {
        question: 'Artificial Inteligence services',        
        answer: 'We do offer various Artificial Inteligence services utilizing a combination of various machine learning and Deep learning algoriths accounting to business use case.',        
      },
      {
        question: 'Securities forecast services',        
        answer: 'We do offer Securities forecast using various machine and Deep Leaning algorithms accounting to business use case.',        
      },
      {
        question: 'Market Sentiments Analysis services',        
        answer: 'We do offer Market Sentiments Analysis algoriths accounting to business use case.',        
      },
      {
        question: 'Software development services',        
        answer: 'We do offer Custom software development and consultancy services using industry leading technologies like Java, Python, Angular, SQL, ...etc .',
      }
    ];
  }

  public getFaqs() : Promise<Awaited<Faq[]>> {
    return Promise.resolve(this.getFaqDetails());
  }
}
