import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogIdListComponent } from './blog-id-list.component';

describe('BlogIdListComponent', () => {
  let component: BlogIdListComponent;
  let fixture: ComponentFixture<BlogIdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogIdListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogIdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
