const puppeteer = require('puppeteer');
// let{email,password} = require('./secrets');

let email = "nikhilkumar707890@gmail.com";
let password = "Nikhil167@";

let {answer} = require("./codes");
// console.log(typeof answer);
let curTab;
let browserOpenPromise = puppeteer.launch({headless: false, 
   defaultViewport: null,
  // args: ["--start-maximized"]
});

// console.log(browserOpenPromise);
browserOpenPromise
.then(function(browser)
{
  // console.log("browser is open");
  // console.log(browserOpenPromise);
  let allTabsPromise = browser.pages();
  return allTabsPromise;
})
.then(function(allTabsarr)
{
  // console.log(typeof allTabsarr);
   curTab = allTabsarr[0];
   let visitingLoginPagePromise = curTab.goto("https://www.hackerrank.com/auth/login");
   return visitingLoginPagePromise;
})
.then(function(data){
  // console.log(typeof data);
  console.log("Hackerrank login page opened");
  let emailWillBeTypedPromise = curTab.type("[placeholder='Your username or email']",email,{delay : 50});
  return emailWillBeTypedPromise;
})
.then(function()
{
  console.log("email is typed");
  let passwordWillBeTypedpromise = curTab.type(
    "input[type='password']",
    password,
    { delay: 100 }
  )
return passwordWillBeTypedpromise;
})
.then(function(){
 console.log("password has been typed");
 let wilBeLoggedInpromise = curTab.click("button[type='submit']");
})
.then(function()
{
   console.log("logged into hackerrank successfully");
   let algorithmTabWillBeOpenedPromise = waitAndClick()
})