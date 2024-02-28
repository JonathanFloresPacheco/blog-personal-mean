import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute ,Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-blog-id-list',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './blog-id-list.component.html',
  styleUrl: './blog-id-list.component.css'
})
export class BlogIdListComponent implements OnInit{
  
  _posts: any;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.blogService.getBById(id).subscribe(posts => {
      this._posts = posts;
    });
  }

  onDelete() {
    if (confirm('¿Estás seguro de eliminar este post?')) {
      this.blogService.deleteBPost(this._posts._id!).subscribe(() => {
        this.router.navigate(['/blog-list']);
      });
    }
  }

}
