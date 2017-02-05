import { async, ComponentFixture, TestBed } from '@angular/core/testing';
  import { By } from '@angular/platform-browser';
  import { DebugElement } from '@angular/core';

  import { RouterTestingModule } from '@angular/router/testing';

  import { FooterComponent } from './footer.component';

  describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [ FooterComponent ]
      })
      .compileComponents();
    }));

    // beforeEach(() => {
    //   fixture = TestBed.createComponent(FooterComponent);
    //   // component = fixture.componentInstance;
    //   // fixture.detectChanges();
    // });

    // it('should create', () => {
    //   expect(component.test).toEqual('ok');
    // });
  });