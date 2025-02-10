const https = require("https");

const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";
  // resonpse is an object thats allow listen to data and Error from api it is readable string
  https.get(url, (resopnse) => {
    let data = " "; // 'data' is an event , data event jab tak chalega jab tak server se  chunks mein data aata rahe ga
    //! jo be mujhe data mil raha hai chunks mein unko mein data mein add kar de raha hai
    resopnse.on("data", (chunk) => {
      data += chunk;
    });
    //! ek time essa aayega jab data khatam ho  gaye ga 'end' trigger hoga  response.on('end') mein listen kiya jata hai,,  jab data mil jaye ga ui mein show karna padega
    resopnse.on("end", () => {
      const joke = JSON.parse(data); // convert into readable form
      console.log(joke);
      console.log(`This is :  ${joke.type} type joke `);
      console.log(`joke line:  ${joke.setup}`);
      console.log(`Joke Puch Line:  ${joke.punchline}`);
    });

    resopnse.on("error", (err) => {
      console.log("Error Fetching hte joke", `${err.message}`);
    });
  });
};

getJoke();
