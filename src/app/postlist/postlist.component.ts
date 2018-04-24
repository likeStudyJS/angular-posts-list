import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  posts: Post[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(data => this.posts = data);
  }

}

interface Post {
  userId: Number,
  id: Number,
  title: String,
  body: String
}