// style
// body.style.backgroundColor="rgb("+e.offsetX","+e.offsetY+")"


// for one box
// get the value of input
var form =document.getElementById("form");

// first name
//  var n=document.getElementById('nam')

//  var d=document.getElementById('des')


// to display
var dis=document.getElementById("display-full-content")

form.addEventListener('submit',addItem)

// to cruddrud link
const link="https://crudcrud.com/api/0a7fccdfbf594ed7833cff240346d4bb/Products";

async function addItem(e){
 
    e.preventDefault();

    // save in cloud
const todoName=e.target.elements.nam.value;
const todoDes=e.target.elements.des.value;

const obj={
    todoName,
    todoDes
}

// postRequest
try{
const response =await axios.post(link,{
    obj,
     isdone:false
})

showTodoOnScreen(response.data)

// clear inputs
e.target.elements.nam.value='';
e.target.elements.des.value=' ';

}catch(err) {
    console.log(err)
}
}



    
 


function showTodoOnScreen(obj){
    const n=obj.obj.todoName
    const des=obj.obj.todoDes

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
    out.appendChild(document.createTextNode(`${n}=>${des}`))
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
    // li.remove(className="list-group-item")
         li.style.display='none' 
        // li.removeChild(out)
        const target=e.target.data
        console.log(target)
        // console.log(e.target.Object.keys(todoName))
        
        
            var a =document.getElementById('out')
            var  d=document.getElementById('done')
            
           
            d.appendChild(a)
    
    
    // network call
    axios.post(link,{
        obj,
        isdone:true
    })
         .then((res)=>console.log(res))
         .catch((err)=>console.log(err))
    
         
    }

          

// todo delete


async function del(e){
    e.preventDefault();
     li.style.display='none'
    // li.removeChild(out)     
            setTimeout(()=>{
            var ap =document.getElementById('out')
            var  dp=document.getElementById('delete')  
            dp.appendChild(ap)  
            },1000)           
}

}


//save in cloud
window.addEventListener("DOMContentLoaded" ,async() =>{
    ///network call

    try {
        const response = await axios.get(link);
        response.data.forEach((obj) => {
            showTodoOnScreen(obj);
        });
      } catch (error) {
        console.log(error);
      }
    })
    
