const fs = require('fs');
const { resolve } = require('path')
fs.watch('./docs', (eventType, filename) => {
  TraverseDirectory()
  // if (filename) {
  //   let fileurl = './docs/'+filename;
  //   fs.readdir(fileurl, (err, files)=>{
  //     console.log(files)
  //     console.log(err)
  //   })
  // }
});
function getfileArrName() {
  return new Promise(function (resolve, reject) {
    fs.readdir('./docs', (err, files) => {
      if (err) {
        console.log('文件夹不存在')
      } else {
        let filelist = [files]
        // console.log(files)
        files.map((item) => {
          console.log(item)
          if (item.indexOf('.') == -1 && item != 'img') {
            filelist.push(item)
          }
        })
        let arr = []
        for (let i = 0; i <= filelist.length; i++) {
          let fileurl = './docs/' + filelist[i];
          fs.readdir(fileurl, (err, files) => {
            if (err) {
            } else {
              // console.log(files,'0101')
              arr.push(files)
              // console.log(arr)
              // if(i>filelist.length) { return arr[arr.length-1]}
              // console.log(arr)
              resolve(arr);
            }
          })
        }
        return arr
      }

    })
  });
}


function _reatdDir(path, reg, result) { // path 读取的目录， reg 文件匹配的正则， result 为结果集
  const pathes = fs.readdirSync(path);
  const fileReg = /\./;
  pathes.forEach(item => {
    if (fileReg.test(item)) { // 判断是否为文件
      if (reg.test(item)) {
        result.push({ // 判断是否为指定文件
          // path: path + "/" + item, // 路径
          name: path.replace(/.\/docs\//, ''), // 文件名
          path: path.replace(/\/docs/, '') + "/" + item
        });
      }
    } else _reatdDir(path + "/" + item, reg, result); // 文件夹的话 就往下读取
  })
}

TraverseDirectory()
function TraverseDirectory() {


  let a = []
  _reatdDir('./docs', /\.(md)$/, a)

  let b = a.filter((x, index, self) => {
    var arrids = []
    a.forEach((item, i) => {
      arrids.push(item.name)
    })
    return arrids.indexOf(x.name) === index
  })
  let obj = []

  for (let i = 0; i <= b.length - 1; i++) {
    obj.push({ title: b[i].name, children: [] })
  }
  a.map((item, index) => {
    for (let i = 0; i <= obj.length - 1; i++) {
      if (item.name == obj[i].title) {
        //    console.log([i])
        obj[i].children.push(item.path)
      }
    }
  })

  console.log(obj)
  obj.unshift({
    title: '前言',
    collapsable: false,
    children: [
      '/',
    ]
  }
  )

  console.log(obj)
  // obj = obj.join(",\n\t")
  let objbr = []

  for (let i = 0; i <= obj.length - 1; i++) {
    objbr.push(obj[i])
  }

  let text = `module.exports = {
	title: '蒋鲜生の前端学习笔记',
	description: '这是一个总结前端知识的网站鸭！',
	base:'/iview/notes/',
	  themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'External', link: 'https://google.com' },
		  ],
		  sidebar:${JSON.stringify(obj).replace(/\,/g, '\,\n\t')}
		  
	  }
  }
`

  console.log(text)
  fs.writeFile('./docs/.vuepress/config.js', text, 'utf8', (err) => {
    if (err) throw err;
    console.log('文件已被保存');
  })

}
// getfileArrName().then((res)=>{
//     console.log(res)
// })
// .then(successFn).catch(handleError)

                    // for(let j=0;j<=files.length;j++){
                    //     // a+=files[i]
                    //     console.log(files[i],'000000')
                    //     // let obj = { title: '工作笔记', children: []}
                    //     obj.children.push(files[i])
                    //     // arr.push(obj)
                    // }
               // const data = new Uint8Array(Buffer.from('Node.js 中文网'));
                // fs.readFile('./docs/.vuepress/config1.js'
                // let datas = fs.readFileSync('./docs/.vuepress/config1.js', 'utf8').split(/\r\n|\n|\r/gm)
                //console.log(fs.readFileSync('./docs/.vuepress/config1.js', 'utf8').slice(17))

                    // fs.writeFile('./docs/.vuepress/config1.js', data,'utf8', (err)=>{
                    //     if (err) throw err;
                    //     console.log('文件已被保存');
                    // })