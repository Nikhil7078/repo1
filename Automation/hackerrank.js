const puppeteer = require('puppeteer');

// let{email,password} = require('secrets');

let email = "nikhilkumar707890@gmail.com";
let password = "Nikhil167@";

let { answer } = require("./codes");
// console.log(typeof answer);
let curTab;
let browserOpenPromise = puppeteer.launch({
  headless: false,
  defaultViewport: null,
  // args: ["--start-maximized"]
});

// console.log(browserOpenPromise);
browserOpenPromise
  .then(function (browser) {
    // console.log("browser is open");
    // console.log(browserOpenPromise);
    let allTabsPromise = browser.pages();
    return allTabsPromise;
  })
  .then(function (allTabsarr) {
    // console.log(typeof allTabsarr);
    curTab = allTabsarr[0];
    let visitingLoginPagePromise = curTab.goto("https://www.hackerrank.com/auth/login");
    return visitingLoginPagePromise;
  })
  .then(function (data) {
    // console.log(typeof data);
    console.log("Hackerrank login page opened");
    let emailWillBeTypedPromise = curTab.type("[placeholder='Your username or email']", email, { delay: 50 });
    return emailWillBeTypedPromise;
  })
  .then(function () {
    console.log("email is typed");
    let passwordWillBeTypedpromise = curTab.type(
      "input[type='password']",
      password,
      { delay: 100 }
    )
    return passwordWillBeTypedpromise;
  })
  .then(function () {
    console.log("password has been typed");
    let wilBeLoggedInpromise = curTab.click("button[type='submit']");
  })
  .then(function () {
    console.log("logged into hackerrank successfully");
    let algorithmTabWillBeOpenedPromise = waitAndClick("div[data-automation='algorithms']");
    return algorithmTabWillBeOpenedPromise;
  }
  )
.then(function (){
      console.log("algorithm page is opened");
      let allQuesPromise = curTab.waitAndClick(
        'a[data-analytics="ChallengeListChallengeName"]'
      );
  })
  .then(function () {
    function getAllQuesLinks() {
      let allElemArr = document.querySelectorAll(
        'a[data-analytics="ChallengeListChallengeName"]'
      );
      let linksArr = [];
      for (let i = 0; i < allElemArr.length; i++) {
        linksArr.push(allElemArr[i].getAttribute("href"));
      }
      return linksArr;
    }
    let linksArrPromise = curTab.evaluate(getAllQuesLinks);
    return linksArrPromise;
  })
  .then(function (linksArr) {
    console.log("links to all ques received");
    // console.log(linksArr);
    //question solve krna h
                              //link to the question to besolved, idx of the linksArr
    let questionWillBeSolvedPromise = questionSolver(linksArr[0], 0);
    for (let i = 1; i < linksArr.length; i++){
      questionWillBeSolvedPromise = questionWillBeSolvedPromise.then(function () {
        return questionSolver(linksArr[i], i);
      })
      // a = 10;
      // a = a + 1;
    }
    return questionWillBeSolvedPromise;
  }).
  then(function () {
    console.log("question is solved");
  })
  .catch(function (err) {
    console.log(err);
  });

function waitAndClick(algoBtn) {
  let waitClickPromise = new Promise(function (resolve, reject) {
    let waitForSelectorPromise = curTab.waitForSelector(algoBtn);
    waitForSelectorPromise
      .then(function () {
        console.log("algo btn is found");
        let clickPromise = curTab.click(algoBtn);
        return clickPromise;
      })
      .then(function () {
        console.log("algo btn is clicked");
        resolve();
      })
      .catch(function (err) {
        reject(err);
      })
  });
  return waitClickPromise;
}
function questionSolver(url, idx) {
  return new Promise(function (resolve, reject) {
    let fullLink = `https://www.hackerrank.com${url}`;
    let goToQuesPagePromise = curTab.goto(fullLink);
    goToQuesPagePromise
      .then(function () {
        console.log("question opened");
        //tick the custom input box mark
        let waitForCheckBoxAndClickPromise = waitAndClick(".checkbox-input");
        return waitForCheckBoxAndClickPromise;
      })
      .then(function () {
        //select the box where code will be typed
        let waitForTextBoxPromise = curTab.waitForSelector(".custominput");
        return waitForTextBoxPromise;
      })
      .then(function () {
        let codeWillBeTypedPromise = curTab.type(".custominput", answer[idx], {
          delay: 100,
        });
        return codeWillBeTypedPromise;
      })
      .then(function () {
        //control key is pressed promise
        let controlPressedPromise = curTab.keyboard.down("Control");
        return controlPressedPromise;
      })
      .then(function () {
        let aKeyPressedPromise = curTab.keyboard.press("a");
        return aKeyPressedPromise;
      })
      .then(function () {
        let xKeyPressedPromise = curTab.keyboard.press("x");
        return xKeyPressedPromise;
      })
      .then(function () {
        let ctrlIsReleasedPromise = curTab.keyboard.up("Control");
        return ctrlIsReleasedPromise;
      })
      .then(function () {
        //select the editor promise
        let cursorOnEditorPromise = curTab.click(
          ".monaco-editor.no-user-select.vs"
        );
        return cursorOnEditorPromise;
      })
      .then(function () {
        //control key is pressed promise
        let controlPressedPromise = curTab.keyboard.down("Control");
        return controlPressedPromise;
      })
      .then(function () {
        let aKeyPressedPromise = curTab.keyboard.press("A");
        return aKeyPressedPromise;
      })
      .then(function () {
        let vKeyPressedPromise = curTab.keyboard.press("V");
        return vKeyPressedPromise;
      })
      .then(function () {
        let controlDownPromise = curTab.keyboard.up("Control");
        return controlDownPromise;
      })
      .then(function () {
        let submitButtonClickedPromise = curTab.click(".hr-monaco-submit");
        return submitButtonClickedPromise;
      })
      .then(function () {
        console.log("code submitted successfully");
        resolve();
      })
      .catch(function (err) {
        reject(err);
      });
  });
}