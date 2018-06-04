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
#code{
    position: fixed;
    left: 9px;
    width: 47%;
    height: 98%;
}
/*来张白纸*/
`
var result2 = `
#paper{
    width: 50%;
    height: 97%;
    background-color: yellowgreen;
    position: fixed;
    right: 9px;
    top: 5px;
    background: #ddd;
    display: flex;
    justify-content: center;
    align-items: center;
}
#paper > .content{
    width: 100%;
    height: 100%;
    background-color: white;
}
/*接下来把Markdown变成HTML*/

/*接下来给HTML加样式*/
#paper > .content{
    padding-left: 80px;
    padding-top: 10px;
}
/*这就是我的动态简历啦，
  谢谢观看！^_^
*/
`
var md = `
## 自我介绍
姓名: 徐赛君
应聘岗位: 前端开发工程师
毕业院校: 吉林大学
专业: 自动化
## 技能介绍
熟悉JavaScript、HTML5、CSS3
Vue、React
了解node.js
## 项目经验
1.豆瓣电影移动端
2.Canvas画板
3.音乐播放器
## 联系方式
邮箱: sagexsj@gmail.com
      18844544787@163.com
手机:  18844544787
 QQ:  562441461
`

writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md,()=>{
                markdownToHtml(md,()=>{
                    //write(result + result2,result3)
                })
            })
        })
    })
})

function markdownToHtml(md,fn){
    
    document.querySelector('#paper > .content').innerHTML =
      marked(md);
    fn()
}

function createPaper(fn){
    var paper = document.createElement('div')
    document.body.appendChild(paper)
    paper.id = 'paper'

    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)

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
    },10)
}

function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(()=>{
        n += 1
        domPaper.innerHTML = markdown.substring(0,n)
        //把传进来的代码用库高亮一下
        
        domPaper.scrollTop = domPaper.scrollHeight //解决页面太长看不见的问题
        if(n>=markdown.length){
            window.clearInterval(id)
            fn.call()
        }
    },0)
}