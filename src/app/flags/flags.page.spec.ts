import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlagsPage } from './flags.page';

describe('FlagsPage', () => {
  let component: FlagsPage;
  let fixture: ComponentFixture<FlagsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
