import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGrid } from './client-grid';

describe('ClientGrid', () => {
  let component: ClientGrid;
  let fixture: ComponentFixture<ClientGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
