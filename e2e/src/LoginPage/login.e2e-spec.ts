import { AppPage } from './login.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

 /* it('should display FundooNotes', () => {
    page.navigateTo();
    // browser.pause();
    expect(page.getTitleText()).toEqual('FundooNotes');
  });*/

  /*it('should put value in login page field & go to dash-board', () => {
    browser.sleep(2000);
    page.navigateTo();
    browser.sleep(2000);
    expect(page.getEmail())
    browser.sleep(2000);
    expect(page.getPassword())
    browser.sleep(3000)
    expect(page.clickLogin())
  });*/
 /* it('click Login & go to the dash-board', () => {
    browser.sleep(2000);
    page.navigateTo();
    expect(page.clickLogin())
    
  });*/
  it('click on Register & go to the sign up page',()=>{
    browser.sleep(2000);
    page.navigateTo();
    //expect(page.getemail())
   // expect(page.getPwd())
    browser.sleep(2000);
    expect(page.clickregister())
   
  });
  it('should fill sign up form and sumbit it',()=>{
    browser.sleep(2000);
    expect(page.getfirstname())
    browser.sleep(2000);
    expect(page.getlastname())
    browser.sleep(2000);
    expect(page.getemailid())
    browser.sleep(2000);
    expect(page.getpassword())
    browser.sleep(2000);
    expect(page.getcpwd())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    page.navigateTo();
  });
  it('should put value in login page field & go to dash-board', () => {
    browser.sleep(2000);
   // page.navigateTo();
    browser.sleep(2000);
    expect(page.getEmail())
    browser.sleep(2000);
    expect(page.getPassword())
    browser.sleep(3000)
    expect(page.clickLogin())
   // page.navigateTo();
    browser.sleep(2000);
    //page.navigateTo();
  });
});
