var fs = require('fs');
var path = require('path');
var targetpath ='C:\\Users\\Nikhil\\FJP5\\WebDevelopment\\Filehandling';
//  var fullpath = path.join(targetpath,)
Treehelper(targetpath," ");

function Treehelper(targetpath,indent)
{
    let isfile = fs.lstatSync(targetpath).isFile();
    if(isfile==true){
        let fileName = path.basename(targetpath);
        console.log(indent + "--" + fileName);
        return ;
    }
    let dirName = path.basename(targetpath);
    console.log(indent+"|--" + dirName);

    let children = fs.readdirSync(targetpath);

    for(let i= 0;i<children.length;i++)
    {
    let childpath = path.join(targetpath,children[i]);
    // console.log(childpath);
    Treehelper(childpath,indent+"\t");
    }
}
// console.log(children);