const fs = require('fs');
const {resolve} = require('path')
fs.watch('./docs',(eventType, filename) => {
    if (filename) {
      let fileurl = './docs/'+filename;
      fs.readdir(fileurl, (err, files)=>{
        console.log(files)
        console.log(err)
      })
    }
});
function getfileArrName(){

      return new Promise(function(resolve, reject) {
        fs.readdir('./docs', (err, files)=>{
            if(err){
                console.log('文件夹不存在')
            }else{
                let filelist = []
                files.map((item)=>{
                    if(item.indexOf('.')==-1&&item!='img'){
                        filelist.push(item)
                    }
                })
                let arr = []
            for(let i=0; i<=filelist.length;i++){
                    let fileurl = './docs/'+filelist[i];
                    fs.readdir(fileurl, (err, files)=>{
                        if(err){
                        }else{
                        // console.log(files,'0101')
                        arr.push(files)
                        // console.log(arr)
                        // if(i>filelist.length) { return arr[arr.length-1]}
                        console.log(arr)
                        resolve( arr);
                        }
                    })
                }
                return arr
            }
           
        })
      });

}

getfileArrName().then((res)=>{
    console.log(res)
})
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