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
    return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina121@gmail.com');
  }
  getPassword(){
    return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina@123456');
  }
   /*---------******click on login button******------------------- */
  clickLogin(){
    return element(by.xpath('/html/body/app-root/app-login/div/button[1]')).click();
    }
     /*Invalid case for login page(email and password filed empty) */
    getemail(){
      return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('');
    }
    getPwd(){
      return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('');
    }
     /*------click on register---------------------- */
    clickregister(){
      return element(by.xpath('/html/body/app-root/app-login/div/button[2]')).click();
    }
     /*---------fill sign up form and sumbit it------------------- */
    getfirstname(){
        return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Reenaa');
    }
    getlastname(){
        return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lealee');
    }
    getemailid(){
        return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina122@gmail.com');
    }
    getpassword(){
        return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@23456');
    }
    getcpwd(){
        return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@23456');
    }
    clicksubmitt(){
        return element(by.xpath('/html/body/app-root/app-registration/form/div/mat-card-actions/button[1]')).click();
      }
       /*---------click on cancel button------------------- */
      clickcancel(){
          return element(by.xpath('/html/body/app-root/app-registration/form/div/mat-card-actions/button[2]'))
      }
       /*Invalid case for login page(fill wrong email and password) */
      getGmail2(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('swapnil12@gmail.com');
      }
      getPwd2(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Swapnil@12');
      }
       /*Invalid case for login page(email field is empty & password field is fill) */
      getGmail(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('');
      }
      getPwd1(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina@123456');
      }
      /*Invalid case for login page(email field is fill & password field is empty) */
      getGmail1(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('swapnil12@gmail.com');
      }
      getPwd3(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('');
      }
      /*Invalid case for login page(entering invalid email i.e "@" missing in email) */
      getGmail3(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina121gmail.com');
      }
      getPwd4(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina@123456');
      }
     /*Invalid case for login page(entering invalid email i.e dot(.)is missing in email) */
      getGmail4(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina121@gmailcom');
      }
      getPwd5(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina@123456');
      }
      /***Invalid case for login page(entering invalid email i.e "gmail" is missing in email)*****/
      getGmail5(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina121@.com');
      }
      getPwd6(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina@123456');
      }
   /*Invalid case for login page(entering invalid email i.e "com" is missing in email) */
      getGmail6(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina121@gmail.');
      }
      getPwd7(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina@123456');
      }
    /*Invalid case for login page(entering invalid email i.e name is missing in email) */
      getGmail7(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('12@gmail.');
      }
      getPwd8(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina@123456');
      }
  /*--Invalid case for login page(entering invalid password i.e "minimumlength!=8")----- */
      getGmail8(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina121@gmail.com');
      }
      getPwd9(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina@12');
      }
 /*Invalid case for login page(entering invalid password i.e "password not having uppercase letter") */
      getGmail9(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina121@gmail.com');
      }
      getPwd10(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('rina@123456');
      }
      /*Invalid case for login page(entering invalid password i.e "password not having lowercase letter") */
      getGmail10(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina121@gmail.com');
      }
      getPwd11(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('R@123456');
      }
 /*------Invalid case for login page(entering invalid password i.e "password not having any special symbol")---------- */
      getGmail11(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina121@gmail.com');
      }
      getPwd12(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina12346');
      }
 /*Invalid case for login page(entering invalid password i.e "password not having number ") */
      getGmail12(){
        return element(by.xpath('//*[@id="mat-input-0"]')).sendKeys('rina121@gmail.com');
      }
      getPwd13(){
        return element(by.xpath('//*[@id="mat-input-1"]')).sendKeys('Rina@');
      }
      /*@-----Invalid case for Registration page("all the field are empty or blank ")-------------@ */
      getfirstname1(){
        return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('');
    }
    getlastname1(){
        return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('');
    }
    getemailid1(){
        return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('');
    }
    getpassword1(){
        return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('');
    }
    getcpwd1(){
        return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('');
    }
    /*@------------****Invalid case for Registration page("fill all the field with invalid input")****---------- @*/
    getfirstname2(){
      return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('swp1234');
  }
  getlastname2(){
      return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('swp2345');
  }
  getemailid2(){
      return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina@');
  }
  getpassword2(){
      return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('rina12');
  }
  getcpwd2(){
      return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('rina12');
  }
  /*----@@@***firstname field is empty and all others are fill@@@@*--------------*/
  getfirstname3(){
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('');
}
getlastname3(){
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
}
getemailid3(){
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
}
getpassword3(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
}
getcpwd3(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
}
/*----@@@***firstname & lastname field is empty and all others are fill@@@@*--------------*/
getfirstname4(){
  return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys(' ');
}
getlastname4(){
  return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys(' ');
}
getemailid4(){
  return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
}
getpassword4(){
  return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
}
getcpwd4(){
  return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
}
/*----@@@***firstname,lastname & email field is empty and all others are fill@@@@*--------------*/
getfirstname5(){
  return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('');
}
getlastname5(){
  return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('');
}
getemailid5(){
  return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('');
}
getpassword5(){
  return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
}
getcpwd5(){
  return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
}
/*-------@@@firstname,lastname,email & password field  is empty and confirm password is fill@@@----------- */
getfirstname6(){
  return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('');
}
getlastname6(){
  return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('');
}
getemailid6(){
  return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('');
}
getpassword6(){
  return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('');
}
getcpwd6(){
  return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
}
/*-------@@@firstname and lastname are fill with number@@@----------- */
getfirstname7(){
  return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('1234');
}
getlastname7(){
  return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('1234');
}
getemailid7(){
  return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
}
getpassword7(){
  return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
}
getcpwd7(){
  return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
}
/*-------@@@firstname and lastname are fill with letters & number@@@----------- */
getfirstname8(){
  return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rina1234');
}
getlastname8(){
  return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('Rina1234');
}
getemailid8(){
  return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
}
getpassword8(){
  return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
}
getcpwd8(){
  return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
}
/*-------@@@firstname and lastname are fill with letters then space and then number@@@----------- */
getfirstname9(){
  return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rina 1234');
}
getlastname9(){
  return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('Rina 1234');
}
getemailid9(){
  return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
}
getpassword9(){
  return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
}
getcpwd9(){
  return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
  }
  /*-------@email field fillup without "@" symbol & all other field are fillup with valid input@----------- */
  getfirstname10(){
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
  }
  getlastname10(){
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
  }
  getemailid10(){
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121gmail.com');
  }
  getpassword10(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
  }
  getcpwd10(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
    }
/*-------@email field fillup without "gmail" & all other field are fillup with valid input@----------- */
getfirstname11(){
  return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
}
getlastname11(){
  return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
}
getemailid11(){
  return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@.com');
}
getpassword11(){
  return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
}
getcpwd11(){
  return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
  }
  /*-------@email field fillup without "com" & all other field are fillup with valid input@----------- */
  getfirstname12(){
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
  }
  getlastname12(){
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
  }
  getemailid12(){
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.');
  }
  getpassword12(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
  }
  getcpwd12(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
    }
     /*-------@email field fillup without "name" & all other field are fillup with valid input@----------- */
     getfirstname13(){
      return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
    }
    getlastname13(){
      return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
    }
    getemailid13(){
      return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('@gmail.com');
    }
    getpassword13(){
      return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
    }
    getcpwd13(){
      return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@123456');
      }
 /*-------@password & cpwd field fillup with "minium length 7" & all other field are fillup with valid input@----------- */
 getfirstname14(){
  return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
}
getlastname14(){
  return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
}
getemailid14(){
  return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
}
getpassword14(){
  return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@1');
}
getcpwd14(){
  return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@1');
  }
  /*-------@password & cpwd field fillup without capital letter & all other field
   are fillup with valid input@----------- */
   getfirstname15(){
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
  }
  getlastname15(){
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
  }
  getemailid15(){
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
  }
  getpassword15(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('ina@123456');
  }
  getcpwd15(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('ina@123456');
    }
    /*-------@password & cpwd field fillup without lowercase letter & all other field
   are fillup with valid input@----------- */
   getfirstname16(){
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
  }
  getlastname16(){
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
  }
  getemailid16(){
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
  }
  getpassword16(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('R@123456');
  }
  getcpwd16(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('R@123456');
    }
    /*-------@password & cpwd field fillup without number and specail symbol & all other field
   are fillup with valid input@----------- */
   getfirstname17(){
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
  }
  getlastname17(){
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
  }
  getemailid17(){
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
  }
  getpassword17(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina');
  }
  getcpwd17(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina');
    }
     /*-------@password & cpwd field are blank & all other field
   are fillup with valid input@----------- */
   getfirstname18(){
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
  }
  getlastname18(){
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
  }
  getemailid18(){
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
  }
  getpassword18(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('');
  }
  getcpwd18(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('');
    }
     /*-------@password fillup with valid input & cpwd is blank & all other field
   are fillup with valid input@----------- */
   getfirstname19(){
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
  }
  getlastname19(){
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
  }
  getemailid19(){
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
  }
  getpassword19(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
  }
  getcpwd19(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('');
    }
     /*-------@password fillup with valid input & cpwd fillup but not like password & all other field
   are fillup with valid input@----------- */
   getfirstname20(){
    return element(by.xpath('//*[@id="mat-input-2"]')).sendKeys('Rinaa');
  }
  getlastname20(){
    return element(by.xpath('//*[@id="mat-input-3"]')).sendKeys('lelee');
  }
  getemailid20(){
    return element(by.xpath('//*[@id="mat-input-4"]')).sendKeys('rina121@gmail.com');
  }
  getpassword20(){
    return element(by.xpath('//*[@id="mat-input-5"]')).sendKeys('Rina@123456');
  }
  getcpwd20(){
    return element(by.xpath('//*[@id="mat-input-6"]')).sendKeys('Rina@1234');
    }
}
