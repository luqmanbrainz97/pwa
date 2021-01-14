import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectCampusPage } from './select-campus.page';

describe('SelectCampusPage', () => {
  let component: SelectCampusPage;
  let fixture: ComponentFixture<SelectCampusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCampusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCampusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
