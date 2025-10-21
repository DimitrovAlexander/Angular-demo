import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestNewsComponent } from './latestnews';

describe('LatestsNews', () => {
  let component: LatestNewsComponent;
  let fixture: ComponentFixture<LatestNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
