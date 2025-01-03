import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGainersComponent } from './top-gainers.component';

describe('TopGainersComponent', () => {
  let component: TopGainersComponent;
  let fixture: ComponentFixture<TopGainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopGainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopGainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
