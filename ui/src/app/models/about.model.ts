
export class About{

  public title: string | undefined;
  public description : string | undefined;
 
  constructor(title?: string, description?: string){
        this.title = title;
        this.description = description;        
  }  
}
