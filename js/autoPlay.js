/*
// The text snippet you want to highlight, as a string
var text = "body{color: red;}";

// Returns a highlighted HTML string
var html = Prism.highlight(text, Prism.languages.css, 'css');
console.log(html) 
*/

var result = `/*
Hello！我叫徐赛君
你也可以称呼我的英文名Sage
下面我将以代码介绍来让你了解我哦
Let's Go!
先准备一些样式吧
*/

*{
    transition: all 1s;
}
html{
    background: rgb(222,222,222);
    font-size: 16px;
}
#code{
    border: 3px solid #dd9a5c;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.45);
    border-radius: 15px;
    padding: 16px;
}

/*我们还是让代码高亮起来吧^_^*/
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A68;
}

/*然后再来点3D效果*/
#code{
    transform: rotate(360deg);
}
/*好啦好啦,我们还是切入正题吧,简历了解一下*/
/*来张白纸*/
#code{
    position: fixed;
    left: 9px;
    width: 47%;
    height: 98%;
}
#paper{
    position: fixed;
    right: 9px;
    top: 5px;
}
`
var result2 = `
#paper{
    width: 50%;
    height: 97%;
    background-color: white;
}`

writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{})
    })
})

function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    document.body.appendChild(paper)
    fn.call()
}
/*function fn3(preResult){
    var result = `
#paper{
    width: 100px;
    height: 100px;
    background-color: white;
}
    `
    var n = 0
    var id = setInterval(()=>{
        n += 1555
        code.innerHTML =  preResult + result.substring(0,n)
        
        code.innerHTML =  Prism.highlight(code.innerHTML, Prism.languages.css)
        styleTag.innerHTML = preResult + result.substring(0,n)
        if(n>=result.length){
            window.clearInterval(id)
        }
    },50)
}*/

/**********把code写到<pre id="code"></pre>里,和style标签里**************/
function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#code')
    //domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(()=>{
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css)
        //把传进来的代码用库高亮一下
        styleTag.innerHTML = prefix + code.substring(0,n)
        //把传进来的代码写进CSS样式
        domCode.scrollTop = domCode.scrollHeight //解决页面太长看不见的问题
        if(n>=code.length){
            window.clearInterval(id)
            fn.call()
        }
    },20)
}