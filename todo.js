// for one box
// get the value of input
var form =document.getElementById("form");

// first name
var n=document.getElementById('nam')

var d=document.getElementById('des')


 

// to display
var dis=document.getElementById("ans")

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
    out.appendChild(document.createTextNode(`${n.value}:${d.value}`))
    li.appendChild(out);
    

    li.appendChild(delbtn)
    li.appendChild(todel)

    
   console.log(dis)
    dis.append(li)

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
            
    })
          
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
            
    })
        
}

}