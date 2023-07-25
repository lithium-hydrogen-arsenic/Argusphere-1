import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSkillComponent } from './tech-skill.component';

describe('TechSkillComponent', () => {
  let component: TechSkillComponent;
  let fixture: ComponentFixture<TechSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechSkillComponent]
    });
    fixture = TestBed.createComponent(TechSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
