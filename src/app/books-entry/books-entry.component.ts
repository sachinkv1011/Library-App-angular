import { Component } from '@angular/core';

@Component({
  selector: 'app-books-entry',
  templateUrl: './books-entry.component.html',
  styleUrls: ['./books-entry.component.css']
})
export class BooksEntryComponent {

  title=""
  author=""
  description=""
  publisher=""
  language=""
  price=""
  destribution=""
  releasedyear=""
  image=""

  readValues=()=>
  {
    let data:any={

      "title":this.title,
      "author":this.author,
      "description":this.description,
      "publisher":this.publisher,
      "language":this. language,
      "price":this.price,
      "destribution":this.destribution,
      "releasedyear":this.releasedyear,
      "image":this.image
      
    }
    console.log(data)
  }
}
