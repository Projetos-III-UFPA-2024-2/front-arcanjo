import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoDestaqueComponent } from './projeto-destaque.component';

describe('ProjetoDestaqueComponent', () => {
  let component: ProjetoDestaqueComponent;
  let fixture: ComponentFixture<ProjetoDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoDestaqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjetoDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
