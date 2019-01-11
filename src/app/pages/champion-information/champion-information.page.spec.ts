import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionInformationPage } from './champion-information.page';

describe('ChampionInformationPage', () => {
  let component: ChampionInformationPage;
  let fixture: ComponentFixture<ChampionInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
