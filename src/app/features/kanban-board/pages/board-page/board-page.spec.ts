import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardPage } from './board-page';

describe('BoardPage', () => {
  let component: BoardPage;
  let fixture: ComponentFixture<BoardPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
