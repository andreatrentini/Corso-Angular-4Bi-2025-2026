import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNomi } from './lista-nomi';

describe('ListaNomi', () => {
  let component: ListaNomi;
  let fixture: ComponentFixture<ListaNomi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNomi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaNomi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
