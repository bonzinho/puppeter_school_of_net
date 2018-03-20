const request = require('request');

function getData(){
    return new Promise((resolve, reject) => {
        request('http://echo.jsontest.com/key/value/one/two', (error, response, body) => {
            if(error){
                reject(error)
            }
            resolve(body)
        })
    })
}

async function main(){
    try{
        let json = await getData();
        return console.log(json);
    }catch (error){
        console.log('FAIL');
    }

}

main();

/*
getData()
.then((result) => {
    console.log(result);
    })
    .catch((err) => {
    console.log(err);
    });
*/