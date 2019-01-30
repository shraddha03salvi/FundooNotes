import { browser, by, element } from 'protractor';
import { elementStart } from '@angular/core/src/render3';
export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-login h1')).getText();
  }
  getEmail(){
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('dhatavkarshraddha@gmail.com');
  }
  getPassword(){
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Shraddha@3');
  }
  clickLogin(){
    return element(by.xpath('/html/body/app-root/app-login/div/button[1]')).click();
    }
}
