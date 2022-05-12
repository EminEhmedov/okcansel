let arr=['left','right','top','bottom']
// let array2=['100','200','300','400','130','250','190','250','320','130','290','110','280','230','198','253','310','123','246','118','279'
// ,'500','600','580','610','570','610','615','610','512','610','61','610','410','520','530','450']


let box1=document.querySelector('#box1')

function mouse(){
    let random=Math.floor(Math.random()*4)
    // let random2=Math.floor(Math.random()*array2.length)
    let count2=Math.floor((Math.random()+0.1)*1000)
    let count=Math.floor(Math.random()*count2)
    // console.log(count);
    let number1=arr[random];
    // // console.log(array2[random2]);
    // let number=array2[random2]
    // console.log(number);
    // box1.style[arr[random]]=`${array2[random2]} px`
    // // box1.style.left+=`${array2[random2]} px`
    box1.style[number1]=`${count}px`
    box1.style.top=`${count}px`
}