import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardService } from '../card.service';
import { delay } from 'rxjs/operators';

interface Card{
  id:number;
  title:string;
  body:string;
  edition:string;
  rarity:string;
  artist:string;
  image:string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards:Card[]=[];
  cardIndex:number=0

  constructor(private http:HttpClient, private cardService: CardService) { }

  ngOnInit() {
    this.getCards();
  }

  getCards(){
    this.cardService.getCards()
      .pipe(
        delay(2000)
      )
      .subscribe((res:Card[])=>{
        this.cards=res;
        // console.log(res)
      });
  }

  page(test){
    if(test=='next')
      this.cardIndex++;
    else
      this.cardIndex--;
  }

}
