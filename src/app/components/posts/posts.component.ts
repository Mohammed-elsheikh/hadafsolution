import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts;
  constructor(private service:ServiceService) { }
  ngOnInit(): void {
    // this.posts.length = 5
    this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }
}
