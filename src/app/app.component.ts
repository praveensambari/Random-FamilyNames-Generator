import { Component } from '@angular/core';
import arrayWords from "../utils/words";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Names Generator';

  words:string = '';
  randomwords:string='';
  limit:number = 10;
  min:number;
  max:number;

  slideChange(newLimit ){
    this.limit= newLimit;
  }
  
getRandomNumberBetween(min,max){
      this.randomwords='';
      while (min != max) {

          this.randomwords=this.randomwords+' '+arrayWords[Math.floor(Math.random()*arrayWords.length)];
          console.log(this.randomwords,min);
          min++;
      }

    return this.randomwords;
  }
  generate(){
  
   // this.words =arrayWords[Math.floor(Math.random()* arrayWords.length)];
    
    this.words =this.getRandomNumberBetween(0,this.limit);
    //arrayWords.slice(0,this.limit);
   // console.log(this.getRandomNumberBetween(0,this.limit));
  }

}
