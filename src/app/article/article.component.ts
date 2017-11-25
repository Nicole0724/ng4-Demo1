import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host:{
    class:'row'
  }
})
export class ArticleComponent implements OnInit {
 @Input() article:Article;

  constructor() {
    this.article=new Article('Angular 2','http://www.baidu.com',10);
  }
  voteUp():boolean{
    this.article.voteUp();
    return false;
  }

  voteDown():boolean{
    this.article.voteDown();
    return false;
  }


  ngOnInit() {

  }

}