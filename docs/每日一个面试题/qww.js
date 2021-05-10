// let arr = ['a', ['b', 'c', ['d', 'e', 'f', ['g']]]];


// function flat (arr) {
//     let arrlist = [];
//     arr.forEach(item=>{
//         if(Array.isArray(item)){
//             arrlist = arrlist.concat(flat(item))
//         }else{
//             arrlist.push(item);
//         }
//     })
//   return arrlist;
// }
// console.log(flat (arr))


// let arr = ['a', ['b', 'c', ['d', 'e', 'f', ['g']]]];
// function flat(array){
//     let arr = [];
//     let queue = array;
//     if(!queue.length){
//         return [];
//     }
//     while(queue.length){
//         let val = queue.pop();
//         if(Array.isArray(val)){
//             console.log('1212121',...val)
//             queue.push(...val)
//         }else {
//             arr.unshift(val);
//         }
       
//     }

//     return arr;
// }


let object = {
    a: {
        b: {
            c: {
                d: 'qdkabcd'
            }
        },
        d: {
            x: 'qdkadx'
        },
        e: 'qdkae'
    }
};

function flat(object,prefix) {
    let res = {};
    console.log(  Object.entries(object))
     Object.entries(object).forEach(item=>{
         let [k,v] = item;
        //  console.log(k)
        //  console.log(v)
         let key = prefix?`${prefix}.${k}`:k;
         console.log('key',k)
         if(typeof v != 'object'){
             res[key] = v;
         }else {
             res = Object.assign(res,flat(v,key));
         }
     });
    return res;
}

console.log(flat(object))

// console.log(flat(arr))
