import { Component, Inject, OnInit, inject } from '@angular/core';
import { BlogService } from '../blog.service';
import { CommonModule, DatePipe, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
  
  _posts: any;

  selectedPostId: string | undefined;

  constructor(private blogService: BlogService) { }
  ngOnInit(): void {
    this.blogService.getBlog().subscribe(posts => {
      this._posts = posts;
    });
  }

  
  
  onSelectPost(id: string) {
    this.selectedPostId = id;
  }
}
