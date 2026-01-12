import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserimentoNomi } from './inserimento-nomi';

describe('InserimentoNomi', () => {
  let component: InserimentoNomi;
  let fixture: ComponentFixture<InserimentoNomi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InserimentoNomi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserimentoNomi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
