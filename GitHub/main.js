let url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");

request(url,cb);

function cb(err,response,html)
{
    if(err){
         console.log(err);
    }
    else{
        // console.log(html);
       getTopicLinks(html); 
    }

 function getTopicLinks(html)
  {
    let $ = cheerio.load(html);
    // console.log($);
    let linkarr =  $(".no-underline.d-flex.flex-column.flex-justify-center");   

  //  console.log(linkarr);

    for(let i = 0 ; i < linkarr.length ; i++)
    {
      let href =  $(linkarr[i]).attr("href");
      let fulllink = `https://github.com/${href}`;
      console.log(fulllink);
    }

  }

}
