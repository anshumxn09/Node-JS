const buff = new Buffer(256);

// for writing into the buffer
// var len = buff.write('Anshuman Sharma!!!');

// console.log(len);

// for reading the buffers
for(var i=0; i<26; i++){
    buff[i] = i+97;
}

console.log(buff.toString('ascii'));