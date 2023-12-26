// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs')

function readFile() {
    return new Promise(function(resolve) {
        fs.readFile('hello.txt', "utf-8", function(err,data) {
            if(err) {
                console.log(err)
            }
            else {
                resolve(data);
            }
        })
    })
}

function writeFile(data) {
    return new Promise(function(resolve) {
        if(err) {
            throw err;
        }
        else {
            fs.writeFile(data,cleaned_data, function(err) {
                if(err) {
                    throw err;
                }
                else {
                    resolve('success')
                }
            })
        }
    })
}


async function fileToClean() {
    var data = await readFile();
    var cleaned_data = data.replace(/\s+/g,' ');
    var response = await writeFile(data, cleaned_data);

    console.log(response)

}

fileToClean()
