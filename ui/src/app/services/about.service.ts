import { Injectable } from '@angular/core';
import { About } from '../models/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  aboutDetails: About[];
  
  constructor() { }
  
  public getAboutDetails() : About[]{
    if (this.aboutDetails == null){
      this.aboutDetails = this.initilizeAboutInfo()      
    }
    return this.aboutDetails
  }

  private initilizeAboutInfo(){
    return [
      {
        title: 'Machine Leaning services',        
        description: 'We do offer various Machine Leaning services utilizing various machine learning algoriths accounting to business use case.',        
      },
      {
        title: 'Deep Leaning services',        
        description: 'We do offer various Deep Leaning services utilizing various Neural networks algoriths accounting to business use case.',        
      },
      {
        title: 'Artificial Inteligence services',        
        description: 'We do offer various Artificial Inteligence services using a combination of machine learning and Deep learning algoriths.',        
      },
      {
        title: 'Securities forecast services',        
        description: 'We do offer Securities forecast using various machine and Deep Leaning algorithms accounting to business use case.',        
      },
      {
        title: 'Market Sentiments Analysis services',        
        description: 'We do Market Sentiments Analysis from various news and media sources uitizing Deep learning algoriths accounting to business use case.',        
      },
      {
        title: 'Software development services',        
        description: 'We do offer Custom software development and consultancy services using industry leading technologies like Java, Python, Angular, SQL, ...etc .',
      }
    ];
  }

  public getAboutInfo() : Promise<Awaited<About[]>> {
    return Promise.resolve(this.getAboutDetails());
  }
}
