// style
// body.style.backgroundColor="rgb("+e.offsetX","+e.offsetY+")"


// for one box
// get the value of input
var form =document.getElementById("form");

// first name
var n=document.getElementById('nam')

var d=document.getElementById('des')


// to display
var dis=document.getElementById("display-full-content")

form.addEventListener('submit',addItem)

 async function addItem(e){
 try {
    e.preventDefault();
    //  console.log(1)
    // delete button

    var todoDonebtn = document.createElement('button');
    todoDonebtn.textContent='Todo done'
    todoDonebtn.className='btn btn-success'
    

    var todel = document.createElement('button');
    todel.textContent='x'
     
    todel.className = 'btn btn-danger btn-sm float-right delete';

     // create li element
    var li=document.createElement('li')
    //  add class
    li.className='list-group-item'
    // add text node with input valut
    var out=document.createElement('li')
    out.id="out"
    out.appendChild(document.createTextNode(`${n.value}=>${d.value}`))
    li.appendChild(out);
    

    li.appendChild(todoDonebtn)
    li.appendChild(todel)

    dis.appendChild(li)

//    event listener for delete button
todoDonebtn.addEventListener('click',todoDone)
todel.addEventListener('click',del)

// remove Item todo done
   function todoDone(e){
    e.preventDefault();
         li.style.display='none' 
        // li.removeChild(out)
        console.log(li)
         setTimeout(()=>{
            
            var a =document.getElementById('out')
            var  d=document.getElementById('done')
           
            d.appendChild(a)
            
    })
    // network call
    axios.post("https://crudcrud.com/api/fe1d806e6e0343ccb07d1ab252d5fc7c/Products",{
        obj,
        isdone:true
    })
         .then((res)=>console.log(res))
         .catch((err)=>console.log(err))
    
         
    }

          



// todo delete


function del(e){
    e.preventDefault();
     li.style.display='none'
    // li.removeChild(out)     
    setTimeout(()=>{
             
            var ap =document.getElementById('out')
            var  dp=document.getElementById('delete')
           
            dp.appendChild(ap)      
            
    })  
        
}


const tosdoName=e.target.nam.value;
const todoDes=e.target.des.value;

const obj={
    tosdoName,
    todoDes
}

// postRequest
axios.post("https://crudcrud.com/api/fe1d806e6e0343ccb07d1ab252d5fc7c/Products",{
    obj,
    isdone:false
})
     .then((res)=>console.log(res))
     .catch((err)=>console.log(err))


}
catch(err){
    console.log(err)
}
 }