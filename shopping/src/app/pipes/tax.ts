import{Pipe,PipeTransform} from '@angular/core';
@Pipe({
  name:'tax'  
})
export class TaxationPipe implements PipeTransform{
    transform(value :number){
        
        if(!value){
            return 0;
        }
      return  (value + 0.1*value).toFixed(2);
       
    }
}