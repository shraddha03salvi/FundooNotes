import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display FundooNotes', () => {
    page.navigateTo();
   // browser.pause();
    expect(page.getTitleText()).toEqual('FundooNotes');
  });
  it('should go to DashBoard page', () => {
  //  page.navigateTo();
    browser.sleep(3000);
    expect(page.getEmail());
    expect(page.getPassword());
    expect(page.clickLogin());
    browser.sleep(4000);
    });
});
