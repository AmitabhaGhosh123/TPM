import { moveItemInArray } from '@angular/cdk/drag-drop';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('dragging utilities', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let array: Object[];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    (array = [{'name':'Amitabha'},{'name':'Puja'},{'name':'Debayan'},{'name':'Ashis'}]);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to move an item inside an array', () => {
    moveItemInArray(array, 2, 3);
    expect(array).toEqual([{'name':'Amitabha'},{'name':'Puja'},{'name':'Ashis'},{'name':'Debayan'}]);
  })
});
