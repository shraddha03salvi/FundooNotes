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
   // browser.sleep(2000);
   // page.navigateTo();
    browser.sleep(2000);
    expect(page.getEmail())
    browser.sleep(2000);
    expect(page.getPassword())
    browser.sleep(3000)
    expect(page.clickLogin())
   // page.navigateTo();
    browser.sleep(2000);
    
  });
  /*<!----****************************************************************
@Description:Put all the credential  in the Login page 
and all the invalid case for the login page
*******************************************************************************--> */
  /*Invalid case for login page(email and password filed empty) */
  it('should show error msg when login page field are empty or blank',()=>{
    page.navigateTo();
    browser.sleep(2000);
    expect(page.getemail())
    browser.sleep(2000);
    expect(page.getPwd())
    browser.sleep(2000);
    expect(page.clickLogin())
    browser.sleep(2000);
  });
  /*Invalid case for login page(fill wrong email and password) */
  it('should show Invalid Result for login page(fill not registered email and password)', () => {
    page.navigateTo();
    browser.sleep(2000)
    expect(page.getGmail2())
    browser.sleep(2000)
    expect(page.getPwd2())
    browser.sleep(2000)
    expect(page.clickLogin())
    browser.sleep(2000)
    //page.navigateTo();
  });
  /*Invalid case for login page(email field is empty & password field is fill) */
  it('should show Invalid Result for login page(email field is empty & password field is fill)', () => {
    page.navigateTo();
    browser.sleep(2000)
    expect(page.getGmail())
    browser.sleep(2000)
    expect(page.getPwd1())
    browser.sleep(2000)
    expect(page.clickLogin())
    browser.sleep(2000)
    //page.navigateTo();
  });
/*Invalid case for login page(email field is fill & password field is empty) */
it('should show Invalid Result for login page(email field is fill & password field is empty)', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail1())
  browser.sleep(2000)
  expect(page.getPwd3())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*Invalid case for login page(entering invalid email i.e "@" missing in email) */
it('should show Invalid Result for login page(entering invalid email i.e @ missing in email)', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail3())
  browser.sleep(2000)
  expect(page.getPwd4())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*Invalid case for login page(entering invalid email i.e dot(.)is missing in email) */
it('should show Invalid Result for login page(entering invalid email i.e dot(.) is missing in email)', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail4())
  browser.sleep(2000)
  expect(page.getPwd5())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*Invalid case for login page(entering invalid email i.e "gmail" is missing in email) */
it('should show Invalid Result for login page(entering invalid email i.e  gmail is missing in email)', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail5())
  browser.sleep(2000)
  expect(page.getPwd6())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*Invalid case for login page(entering invalid email i.e "com" is missing in email) */
it('should show Invalid Result for login page(entering invalid email i.e com is missing in email)', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail6())
  browser.sleep(2000)
  expect(page.getPwd7())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*Invalid case for login page(entering invalid email i.e name is missing in email) */
it('should show Invalid Result for login page(entering invalid email i.e name is missing in email)', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail7())
  browser.sleep(2000)
  expect(page.getPwd8())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*Invalid case for login page(entering invalid password i.e "minimumlength!=8") */
it('should show Invalid Result for login page(entering invalid password i.e "minimumlength!=8")', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail8())
  browser.sleep(2000)
  expect(page.getPwd9())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*Invalid case for login page(entering invalid password i.e "password not having uppercase letter") */
it('should show Invalid Result for login page(entering invalid password i.e "password not having uppercase letter")', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail9())
  browser.sleep(2000)
  expect(page.getPwd10())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*Invalid case for login page(entering invalid password i.e "password not having lowercase letter") */
it('should show Invalid Result for login page(entering invalid password i.e "password not having lowercase letter")', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail10())
  browser.sleep(2000)
  expect(page.getPwd11())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*Invalid case for login page(entering invalid password i.e "password not having any special symbol") */
it('should show Invalid Result for login page(entering invalid password i.e "password not having any special symbol")', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail11())
  browser.sleep(2000)
  expect(page.getPwd12())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*Invalid case for login page(entering invalid password i.e "password not having number ") */
it('should show Invalid Result for login page(entering invalid password i.e "password not having number")', () => {
  page.navigateTo();
  browser.sleep(2000)
  expect(page.getGmail12())
  browser.sleep(2000)
  expect(page.getPwd13())
  browser.sleep(2000)
  expect(page.clickLogin())
  browser.sleep(2000)
  //page.navigateTo();
});
/*============================Registration Page================================================================== */
 /*<!----****************************************************************
@Description:Put all the values in Sign Up page and test invalid case for the Sign up page
*******************************************************************************--> */
/*Invalid case for Registration page("all the field are empty or blank ") */
it('should show Invalid Result for Registration page("all the field are empty or blank ")',()=>{
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(2000);
    expect(page.getfirstname1())
    browser.sleep(2000);
    expect(page.getlastname1())
    browser.sleep(2000);
    expect(page.getemailid1())
    browser.sleep(2000);
    expect(page.getpassword1())
    browser.sleep(2000);
    expect(page.getcpwd1())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();

});
/*Invalid case for Registration page("fill all the field with invalid input ") */

it('should show Invalid Result for Registration page("fill all the field with invalid input ")',()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname2())
    browser.sleep(2000);
    expect(page.getlastname2())
    browser.sleep(2000);
    expect(page.getemailid2())
    browser.sleep(2000);
    expect(page.getpassword2())
    browser.sleep(2000);
    expect(page.getcpwd2())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();

});
/*Invalid case for Registration page("firstname field is empty and all other are fill ") */

it('should show Invalid Result for Registration page("firstname field is empty and all other are fill ")',()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname3())
    browser.sleep(2000);
    expect(page.getlastname3())
    browser.sleep(2000);
    expect(page.getemailid3())
    browser.sleep(2000);
    expect(page.getpassword3())
    browser.sleep(2000);
    expect(page.getcpwd3())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();

});
/*Invalid case for Registration page("firstname & lasttname field is empty and all other are fill ") */

it('should show Invalid Result for Registration page(" firstname & lasttname field is empty and all other are fill ")',()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname4())
    browser.sleep(2000);
    expect(page.getlastname4())
    browser.sleep(2000);
    expect(page.getemailid4())
    browser.sleep(2000);
    expect(page.getpassword4())
    browser.sleep(2000);
    expect(page.getcpwd4())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();

});
/*Invalid case for Registration page("firstname,lasttname & email field is empty and all other are fill ") */

it('should show Invalid Result for Registration page(" firstname,lasttname & email field is empty and all others are fill ")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname5())
    browser.sleep(2000);
    expect(page.getlastname5())
    browser.sleep(2000);
    expect(page.getemailid5())
    browser.sleep(2000);
    expect(page.getpassword5())
    browser.sleep(2000);
    expect(page.getcpwd5())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();

});
/*Invalid case for Registration page("firstname,lastname,email & password field  is empty and confirm password is fill") */
it('should show Invalid Result for Registration page("firstname,lastname,email & password field  is empty and confirm password is fill")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname6())
    browser.sleep(2000);
    expect(page.getlastname6())
    browser.sleep(2000);
    expect(page.getemailid6())
    browser.sleep(2000);
    expect(page.getpassword6())
    browser.sleep(2000);
    expect(page.getcpwd6())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();

});

/*Invalid case for Registration page("firstname and lastname are fill with number and all other 
filed are with valid input") 
*/
it('should show Invalid Result for Registration page("firstname and lastname are fill with number")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname7())
    browser.sleep(2000);
    expect(page.getlastname7())
    browser.sleep(2000);
    expect(page.getemailid7())
    browser.sleep(2000);
    expect(page.getpassword7())
    browser.sleep(2000);
    expect(page.getcpwd7())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("firstname and lastname are fill with letters & number and all other 
filed are with valid input") 
*/
it('should show Invalid Result for Registration page("firstname and lastname are fill with letters & number")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname8())
    browser.sleep(2000);
    expect(page.getlastname8())
    browser.sleep(2000);
    expect(page.getemailid8())
    browser.sleep(2000);
    expect(page.getpassword8())
    browser.sleep(2000);
    expect(page.getcpwd8())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("firstname and lastname are fill with letters then space
 and then numberand all other filed are with valid input") 
*/
it('should show Invalid Result for Registration page("firstname and lastname are fill with letters then space and then number")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname9())
    browser.sleep(2000);
    expect(page.getlastname9())
    browser.sleep(2000);
    expect(page.getemailid9())
    browser.sleep(2000);
    expect(page.getpassword9())
    browser.sleep(2000);
    expect(page.getcpwd9())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("email field fillup without "@" symbol & 
all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("email field fillup without "@" symbol")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname10())
    browser.sleep(2000);
    expect(page.getlastname10())
    browser.sleep(2000);
    expect(page.getemailid10())
    browser.sleep(2000);
    expect(page.getpassword10())
    browser.sleep(2000);
    expect(page.getcpwd10())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("email field fillup without "gmail" & 
all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("email field fillup without "gmail" word")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname11())
    browser.sleep(2000);
    expect(page.getlastname11())
    browser.sleep(2000);
    expect(page.getemailid11())
    browser.sleep(2000);
    expect(page.getpassword11())
    browser.sleep(2000);
    expect(page.getcpwd11())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("email field fillup without  "com"  & 
all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("email field fillup without  "com" word")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname12())
    browser.sleep(2000);
    expect(page.getlastname12())
    browser.sleep(2000);
    expect(page.getemailid12())
    browser.sleep(2000);
    expect(page.getpassword12())
    browser.sleep(2000);
    expect(page.getcpwd12())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("email field fillup without   "name" & 
all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("email field fillup without "name" word")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname13())
    browser.sleep(2000);
    expect(page.getlastname13())
    browser.sleep(2000);
    expect(page.getemailid13())
    browser.sleep(2000);
    expect(page.getpassword13())
    browser.sleep(2000);
    expect(page.getcpwd13())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("password & cpwd field fillup with "minium length 7" 
& all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("password & cpwd field fillup with "minium length 7")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname14())
    browser.sleep(2000);
    expect(page.getlastname14())
    browser.sleep(2000);
    expect(page.getemailid14())
    browser.sleep(2000);
    expect(page.getpassword14())
    browser.sleep(2000);
    expect(page.getcpwd14())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("password & cpwd field fillup without capital letter
& all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("password & cpwd field fillup  without capital letter")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname15())
    browser.sleep(2000);
    expect(page.getlastname15())
    browser.sleep(2000);
    expect(page.getemailid15())
    browser.sleep(2000);
    expect(page.getpassword15())
    browser.sleep(2000);
    expect(page.getcpwd15())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("password & cpwd field fillup without lowercase letter
& all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("password & cpwd field fillup  without lowercase letter")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname16())
    browser.sleep(2000);
    expect(page.getlastname16())
    browser.sleep(2000);
    expect(page.getemailid16())
    browser.sleep(2000);
    expect(page.getpassword16())
    browser.sleep(2000);
    expect(page.getcpwd16())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("password & cpwd field fillup without number and special symbol
& all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("password & cpwd field fillup  without number and special symbol")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname17())
    browser.sleep(2000);
    expect(page.getlastname17())
    browser.sleep(2000);
    expect(page.getemailid17())
    browser.sleep(2000);
    expect(page.getpassword17())
    browser.sleep(2000);
    expect(page.getcpwd17())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("password & cpwd field are blank & all other field
& all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("password & cpwd field are blank ")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname18())
    browser.sleep(2000);
    expect(page.getlastname18())
    browser.sleep(2000);
    expect(page.getemailid18())
    browser.sleep(2000);
    expect(page.getpassword18())
    browser.sleep(2000);
    expect(page.getcpwd18())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("password fillup with valid input & cpwd is blank
& all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("password fillup with valid input & cpwd is blank ")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname19())
    browser.sleep(2000);
    expect(page.getlastname19())
    browser.sleep(2000);
    expect(page.getemailid19())
    browser.sleep(2000);
    expect(page.getpassword19())
    browser.sleep(2000);
    expect(page.getcpwd19())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
/*Invalid case for Registration page("password fillup with valid input & cpwd fillup but not like password
& all other field are fillup with valid input") 
*/
it('should show Invalid Result for Registration page("password fillup with valid input & cpwd is blank ")'
,()=>{
  page.navigateTo();
  browser.sleep(2000);
  expect(page.clickregister())
  //page.navigateTo();
  browser.sleep(1500);
    expect(page.getfirstname20())
    browser.sleep(2000);
    expect(page.getlastname20())
    browser.sleep(2000);
    expect(page.getemailid20())
    browser.sleep(2000);
    expect(page.getpassword20())
    browser.sleep(2000);
    expect(page.getcpwd20())
    browser.sleep(2000);
    expect(page.clicksubmitt())
    browser.sleep(2000);
    //page.navigateTo();
});
});
