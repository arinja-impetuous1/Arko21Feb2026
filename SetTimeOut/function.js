function sayhello(){
    console.log("hello");
}
sayhello();


function add(a,b)
{
    return a+b;
}
console.log(add(2,4));
console.log(add('a','b'));

function product(a,b)
{
    return a*b;
}

let product1=(a,b)=>a*b;

console.log(product1(2,6));
console.log(product1(1,1));
console.log(product1(2,2));


function a(d)
{
    d();
    console.log("inside a");
}
function b()
{
    console.log("inside b");
}
a(b);

function outer()
{
    let count=0;
    function inner()
    {
        count++;
        console.log(count);
    }
    return inner;
}
let res=outer();
res();
res();