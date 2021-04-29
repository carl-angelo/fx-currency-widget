import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CurrencyDefinitionPipe} from "./pipe/currency-definition.pipe";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrencyDefinitionPipe
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have - from currency selection'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.nativeElement.querySelector('#from-currency-select')
    expect(app).toBeTruthy();
  });

  it(`should have - from currency input'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.nativeElement.querySelector('#from-currency-input')
    expect(app).toBeTruthy();
  });

  it(`should have - to currency selection'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.nativeElement.querySelector('#to-currency-select')
    expect(app).toBeTruthy();
  });

  it(`should have - to currency input'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.nativeElement.querySelector('#to-currency-input')
    expect(app).toBeTruthy();
  });

  // it('should load from currency options', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const optionList = fixture.debugElement.nativeElement.querySelector('#from-currency-select > option')
  //   expect(optionList).toBeGreaterThan(1);
  // });
  //
  // it('should load to currency options', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const optionList = fixture.debugElement.nativeElement.querySelector('#to-currency-select > option')
  //   expect(optionList).toBeGreaterThan(1);
  // });
});
