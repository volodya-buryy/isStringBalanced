const express = require('express')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/balanced', function (req, res) {
    let string = req.body.string;
    console.log(string);
    let balancedArr = string.split("");
    let balancedSumArr = {
        left:[],
        right:[]
    }
    balancedArr.map( item => {
        if(item === "{"){
            balancedSumArr.left.push(item);
        }else if(item === "}"){
            balancedSumArr.right.push(item);
        }
    });

    res.send({
        test: 'Hello World!!!!!!!!!!!!!',
        balanceResult: 'balanceResult'
    })
})
app.get('/factorial', function(req, res){
    console.log(req.query.factorial)
    function a (number){
        var factorial = number;
        for(let i = number - 1; i > 0; i--){
            factorial = factorial * i
        }
        res.send({factorial: factorial})
    }
    a(req.query.factorial)
})
app.get('/fib', function(req, res){
    console.log(req.query.fib);

    res.send("1")
})

app.get('/is-sorted', function(req, res){
    let arr = req.query.sorted;
    function isSorted(arr){
        console.log(arr)
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                res.send(false)
            }else{
                res.send(true)
            }
        }
    }
    isSorted(arr)

})

app.listen(3000, function () {

  console.log('Example app listening on port 3000!')
})