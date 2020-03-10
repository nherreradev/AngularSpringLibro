import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarLibroComponent } from './eliminar-libro.component';

describe('EliminarLibroComponent', () => {
  let component: EliminarLibroComponent;
  let fixture: ComponentFixture<EliminarLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
