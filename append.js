const fs = require('fs');

fs.appendFile('anshu.txt', 'Anshuman Sharma focus on codeeee', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('done successfully');
})

fs.writeFile('anshu.txt', 'Truncated the previous data', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('done successfully');
})

fs.readFile('anshu.txt', "UTF8", (err, data) => {
    console.log(data);
})