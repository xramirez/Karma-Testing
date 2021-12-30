import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'calculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('calculator');
  });

  it('should successfully add numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.num1 = 10;
    app.num2 = 5;
    app.setOperator('+')
    app.calc();
    expect(app.num1).toEqual(15);
  })

  it('should successfully subtract numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.num1 = 10;
    app.num2 = 5;
    app.setOperator('-')
    app.calc();
    expect(app.num1).toEqual(5);
  })

  it('should successfully multiply numbers', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance;
    app.num1 = 10;
    app.num2 = 5;
    app.setOperator('*')
    app.calc();
    expect(app.num1).toEqual(50);
  })

  it('should successfully divide numbers', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance;
    app.num1 = 10;
    app.num2 = 5;
    app.setOperator('/')
    app.calc();
    expect(app.num1).toEqual(2);
  }) 

  it('should be able to reset num1 to undefined', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance;
    app.reset();
    expect(app.num1).toEqual(undefined);
  })

  it('should reset num2 to undefined after a calc is done', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance;
    app.updateNum('2')
    app.setOperator('+')
    app.updateNum('2');
    app.calc();
    expect(app.num2).toEqual(undefined);
  })

  it('should not let a user hit = to calculate until there is 2 numbers and an operator', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.num1 = undefined;
    app.calc();
    expect(app.num1).toEqual(undefined);
  })

  it('should be able to successfully set the operator', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.updateNum('0')
    app.setOperator('+');
    expect(app.operator).toEqual('add');
  })
  it('should set operated to true after an operator is set', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.updateNum('7');
    app.setOperator('-');
    expect(app.operated).toEqual(true);
  })
  
  it('should append to both the number display field and the number when a button is pressed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.updateNum('2');
    expect(app.num1).toEqual(2);
  })
  it('should update the 2nd number once an operator has been set', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.updateNum('2')
    app.setOperator('+');
    app.updateNum('5');
    expect(app.num2).toEqual(5);
  });

  it('should not show the span that displays the first number on load', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const div = fixture.debugElement.nativeElement.querySelector('.num1')
    expect(div).toBeNull();
  })
});
