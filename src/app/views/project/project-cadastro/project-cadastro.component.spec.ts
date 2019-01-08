import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCadastroComponent } from './project-cadastro.component';

describe('ProjectCadastroComponent', () => {
  let component: ProjectCadastroComponent;
  let fixture: ComponentFixture<ProjectCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
