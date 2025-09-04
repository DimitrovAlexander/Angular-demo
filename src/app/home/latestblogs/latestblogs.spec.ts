import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Latestblogs } from './latestblogs';

describe('Latestblogs', () => {
  let component: Latestblogs;
  let fixture: ComponentFixture<Latestblogs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Latestblogs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Latestblogs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
