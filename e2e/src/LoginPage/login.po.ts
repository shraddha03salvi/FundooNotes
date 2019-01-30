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
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina12@gmail.com');
  }
  getPassword(){
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina@12345');
  }
  clickLogin(){
    return element(by.xpath('/html/body/app-root/app-login/div/button[1]')).click();
    }
    getemail(){
      return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('');
    }
    getPwd(){
      return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('');
    }
    clickregister(){
      return element(by.xpath('/html/body/app-root/app-login/div/button[2]')).click();
    }
    getfirstname(){
        return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rina');
    }
    getlastname(){
        return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lele');
    }
    getemailid(){
        return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina12@gmail.com');
    }
    getpassword(){
        return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@12345');
    }
    getcpwd(){
        return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@12345');
    }
    clicksubmitt(){
        return element(by.xpath('/html/body/app-root/app-registration/form/div/mat-card-actions/button[1]')).click();
      }
      clickcancel(){
          return element(by.xpath('/html/body/app-root/app-registration/form/div/mat-card-actions/button[2]'))
      }
}
