import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot(), RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login method', () => {
    expect(component.login).toBeDefined();
  });

  it('should navigate to /home after successful login', () => {
    const navigateSpy = spyOn(component['navCtrl'], 'navigateRoot');
    component.login();
    expect(navigateSpy).toHaveBeenCalledWith('/home');
  });

  // Agrega más pruebas según tus necesidades
});
