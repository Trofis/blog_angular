import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

  getColor(){
    if (this.postLoveIts > 0){
      return 'green'
    }
    else if (this.postLoveIts < 0){
      return 'red'
    }
  }

  addLike(){
    this.postLoveIts += 1;
  }

  addDislike(){
    this.postLoveIts -= 1;
  }

}
