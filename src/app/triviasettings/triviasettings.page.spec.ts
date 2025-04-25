import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TriviasettingsPage } from './triviasettings.page';

describe('TriviasettingsPage', () => {
  let component: TriviasettingsPage;
  let fixture: ComponentFixture<TriviasettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviasettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
