const fs = require('fs');

const writeFile = fileContent =>{
  return new Promise((resolve, reject)=>{
fs.writeFile("./READMEGen.md", fileContent, err =>{
      if (err){
        reject(err);
        return;
      }resolve({
        ok: true,
        message: "README generated!"
      })
      
  });
});
  };
module.exports = {writeFile}