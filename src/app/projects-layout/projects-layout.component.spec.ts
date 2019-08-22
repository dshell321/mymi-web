import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsLayoutComponent } from './projects-layout.component';

describe('ProjectsLayoutComponent', () => {
  let component: ProjectsLayoutComponent;
  let fixture: ComponentFixture<ProjectsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
