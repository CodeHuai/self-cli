import '../css/style.css'
import '../css/test.less'

const divDom = document.createElement('div')
divDom.className = 'title'
divDom.innerText = '你好哇'

// 设置背景图片
const bgImage = document.createElement('div')
bgImage.className = 'image-bg'

document.body.appendChild(divDom)
document.body.appendChild(bgImage)