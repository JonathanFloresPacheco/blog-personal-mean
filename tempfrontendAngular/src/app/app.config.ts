import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {BlogService} from './blog.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    BlogService,
  ]
};
