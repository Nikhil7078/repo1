let url = "https://www."

const request = require("request");
const cheerio = require("cheerio");

request(url,cb);

function cb(err,res,body)
{
    if(err)
    {
       console.error("error",err);
    }
    else{
        handleHTML(body);
    }
}

function handleHTML(html){
    // puri html selecTool ke andar aa jayegi 
    let selecTool = cheerio.load(html);
    let anchorElem = selecTool('a[data-hover="View All Results"]');
    //console.log(anchorElem);
}