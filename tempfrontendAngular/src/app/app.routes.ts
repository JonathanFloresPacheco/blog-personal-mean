import { Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogIdListComponent } from './blog-id-list/blog-id-list.component';

export const routes: Routes = [
  { path: 'blog-list', component: BlogListComponent },
  { path: 'blog-list/:id', component: BlogIdListComponent },
];
