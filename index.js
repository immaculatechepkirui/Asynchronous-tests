// You are building a system that sends email reminders to users 5 seconds after they 
// register. Create an async function sendReminder(email) that waits 5 seconds using 
// setTimeout and then logs "Reminder sent to [email]". Simulate sending a reminder to 3 
// users.

// PSEUDOCODE
// create an async function sendRemainder that takes in an email and resolve
// set a timeout to send the user and the email sent
// create another async function that takes in an array of 
// 3 users performing the the sendremainder function
 async  function  sendRemainder(email) {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log(`Reminder sent to ${email}`);

 }

 const systemUsers =["immaze_hymaze@gmail.com", "immahleley@gmail.com", "grayliam@gmail.com"];
       systemUsers.forEach(email => {
           sendRemainder(email)
       })




// You want to simulate a login system that tries to log in a user. The first two attempts 
// fail, but the third succeeds. Write a function tryLogin() that uses a counter and Promises.
//  Use setTimeout to simulate a 1-second delay between attempts. Log "Login successful"
//  or "Login failed after 3 attempts" based on whether login succeeds.

// create a variable to track if the attempt is wrong or right
// create a function tryLogin which is a new promise and takes in a resolve and reject
// initialize a variable count that is executed afer a second and increments to three
//  times for the user to enter the correct redentials using setTimeOut
// Create an async function with try and catch

async function tryLogin() {
    let count = 0;
    while(count < 3){
         await new Promise(resolve => setTimeout(resolve, 1000));
         count ++;

         if(count === 3){
            console.log("Login successful");
            return;
         };
    };
    console.log("Login failed after 3 attempts")
};

tryLogin();


//  Build a countdown timer that counts down from 5 to 0, displaying one number per second 
// using setInterval. When the countdown reaches 0, stop the interval and log "Time's up!".
let counter = 0;
const interval = setInterval(() => {
    counter ++;
    if(counter === 1){
        clearInterval(interval);
        console.log("Time is up!")
    }
 
    for(let i =5; i > 0; i--){
        console.log(i);
    }
     
}, 1000);




// You are simulating a page that loads data in stages. Create an async function called 
// loadPage() that: logs "Loading header...", waits 1 second; logs "Loading content...", 
// waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully 
// loaded". Use setTimeout inside Promises and await them in sequence.

async function pageLoad() {
    await new Promise (resolve => setTimeout(resolve, 1000));
    console.log("Loading header");

    await new Promise (resolve => setTimeout(resolve, 2000));
    console.log("Loading content");

    await new Promise (resolve => setTimeout(resolve, 1000));
    console.log("Loading footer");
    
}
pageLoad();

// You are simulating fetching stock prices with delays. Write a function fetchPrice(symbol) 
// that returns a Promise which resolves after 2 seconds with the message "Price for [symbol]
//  retrieved". Use async/await to call it for two different stocks ("AAPL" and "GOOG") and 
// log the messages in order.

function fetchPrice(symbol){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Price for ${symbol} retrieved`);
        }, 2000);
    });
}

async function fetchStock() {
      const firstPrice = await fetchPrice("AAPL");
      console.log(firstPrice);
      
      const secondPrice = await fetchPrice("GOOG");
      console.log(secondPrice);
}

fetchStock();
