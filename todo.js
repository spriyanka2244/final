// for one box
// get the value of input
var form =document.getElementById("form");

// first name
var n=document.getElementById('nam')

var d=document.getElementById('des')


 

// to display
var dis=document.getElementById("display-full-content")

form.addEventListener('submit',addItem)

function addItem(e){
    e.preventDefault();
    //  console.log(1)
    // delete button

    var delbtn = document.createElement('button');
    delbtn.textContent='Todo done'

    var todel = document.createElement('button');
    todel.textContent='x'

     // create li element
    var li=document.createElement('li')
    //  add class
    li.className='list-group-item'
    // add text node with input valut
    var out=document.createElement('li')
    out.id="out"
    out.appendChild(document.createTextNode(`${n.value}=>${d.value}`))
    li.appendChild(out);
    

    li.appendChild(delbtn)
    li.appendChild(todel)

    dis.appendChild(li)

//    event listener for delete button
delbtn.addEventListener('click',despir)

// remove Item todo done
function despir(e){
    e.preventDefault();
        li.style.display='none' 
         setTimeout(()=>{
            
            var a =document.getElementById('out')
            var  d=document.getElementById('done')
           
            d.appendChild(a)
            
    },1000)


          
}


// todo delete
todel.addEventListener('click',del)

function del(e){
    e.preventDefault();
    li.style.display='none' 
         setTimeout(()=>{
             
            var ap =document.getElementById('out')
            var  dp=document.getElementById('delete')
           
            dp.appendChild(ap)
            
    },1000)

    axios.post("https://crudcrud.com/api/ca75fa636a814021bae01022c4597ed2/Products",{
    obj,
    isdone:true
})
     .then((res)=>console.log(res))
     .catch((err)=>console.log(err))
        
}

const tosdoName=e.target.nam.value;
const todoDes=e.target.des.value;

const obj={
    tosdoName,
    todoDes
}

// postRequest
axios.post("https://crudcrud.com/api/ca75fa636a814021bae01022c4597ed2/Products",{
    obj,
    isdone:false
})
     .then((res)=>console.log(res))
     .catch((err)=>console.log(err))
}


