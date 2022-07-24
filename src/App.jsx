import { useState,useEffect } from "react";
import './app.css'

function App() {

  // relaod component state and function
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
}

const [editId, setEditId ] = useState(null);

const [people, setPeople] = useState(
  [
    {
  "id": 1,
  "name": "Panos",
  "color": "blue"
},
{
  "id": 2,
  "name": "Nikos",
  "color": "red"
},{
  "id": 3,
  "name": "Marinos",
  "color": "green"
},
]
)
// to create add
const [ userInput, setUserInput ] = useState('');
const [ colorInput, setColorInput ] = useState('');

  const [color, setColor] = useState([{
    id:1,
    status:true
  },
  {
    id:2,
    status:false
  },{
    id:3,
    status:true
  }
  ,{
    id:4,
    status:true
  },{
    id:5,
    status:true
  } 
]);


const addNew =()=>{
    const newarr = {id:color.length+1,status:true}
    setColor(old=>[...old, newarr])
}

const removeFromArray =()=>{
  const index2 = color.length
  setColor(color.filter((i)=>{
    return i.id !== index2;
  }))
}



  const updateColor = (id) => {
  //-------------------------------updating an array
  console.log(color)
  // find index
  const index = color.map(object => object.id).indexOf(id)
  // new mpdified array
  let newarr = color
  newarr[index].status = !newarr[index].status
  // change state
  setColor(oldarr=>{return newarr})
  reset()



    // --------------------------add in array
    // const newarr = [1,2,3]
    // setColor(old=>[...old, newarr])

    // ------------------------change single value 
    // setColor(previousState => {
    //   return { ...previousState, status: !previousState.status }
    // });
  }

  const handleDelete=(id)=>{
    console.log(id)
    setPeople(people.filter((i)=>{
      return i.id !== id;
    }))
  }


  // handleUpdate
  const handleUpdate=(id,name,color)=>{
    console.log(id)
    setUserInput(name)
    setColorInput(color)
    setEditId(id)
  }




  // add new person
  const handleChange = (e) => {
    setUserInput(e.target.value)
}
const handleColorChange = (e) => {
  setColorInput(e.target.value)
  console.log(colorInput)
}


const handleSubmit = (e) => {
  console.log("submit")
  e.preventDefault();
  if(editId){
    console.log("push changes to id: ", editId)
    editUserNColor(userInput, colorInput)
    setUserInput("");
    setColorInput("")
    setEditId(null);
    return
  }
  addUserNColor(userInput,colorInput)
  setUserInput("");
  setColorInput("")
}
// for 1
// const addTask = (userInput) => {
//   let copy = [...people];
//   copy = [...copy, { id: people.length + 1, name: userInput, color:"crimson" }];
//   setPeople(copy);
// }

// for multiple
const addUserNColor= (userInput, colorInput)=>{
  let copy = [...people];
  copy = [...copy, { id: people.length + 1, name: userInput, color:colorInput }];
  setPeople(copy);
}

// edit for multiple
const editUserNColor=(userInput,colorInput)=>{
  let copy = [...people];
  const index = copy.map(object => object.id).indexOf(editId)
  copy[index].name = userInput;
  copy[index].color = colorInput;
  setPeople(copy)

}


  return (<>
    <div key={seed} className="App">
      <h1>My favorite color is {color[0].id}!</h1>
    </div>
    {/* <button
      onClick={()=>{updateColor()}}
    >
      Invert
    </button> */}
    
    {/* Add */}
    <button
    onClick={()=>{addNew()}}
    >
      Add new
    </button>

    {/* delete */}
    <button
    onClick={()=>{removeFromArray()}}
    >
      Delete
    </button>


    {/* Update */}
    <button
      
      onClick={()=>{console.log(color);console.log(people)}}
    >
      Print Array
    </button>
      <br />
      <br />
      <br />

      {editId
      ?
      <>

        Edit
        <form action="" onSubmit={handleSubmit}>
          <input value={userInput} type="text" onChange={handleChange} placeholder="Enter person..."/>
          <input value={colorInput} type="text" onChange={handleColorChange} placeholder="Enter color..."/>
          <button type="submit">Submit</button>
      </form>
      </>
      :
      <>
      Create New
      <form action="" onSubmit={handleSubmit}>
      <input value={userInput} type="text" onChange={handleChange} placeholder="Enter person..."/>
      <input value={colorInput} type="text" onChange={handleColorChange} placeholder="Enter color..."/>
      <button type="submit">Submit</button>
      </form>
      </>
      }
       
      

      <br />
      <br />

    {
      color.map((c)=>{
        return(
          <div className="heart" style={{fontSize:40}}>
           {c.status?<i onClick={()=>{updateColor(c.id)}} class="bi bi-balloon-heart"></i>:<i onClick={()=>{updateColor(c.id)}} class="bi bi-balloon-heart-fill"></i>}
        </div>
        )
      })
    }

    {people.map((p)=>{
      return(
        <div>
          <span style={{color:p.color}}>{p.id} - {p.name}</span>&#160;&#160;&#160;&#160;
          <i style={{fontSize:20}} onClick={ () => { handleDelete(p.id) } } class="bi bi-trash"></i>
          &#160;&#160;&#160;&#160;
          <i class="bi bi-pencil-square" onClick={ () => { handleUpdate(p.id,p.name,p.color) } }></i>
          <br />
          <br />
        </div>
      )
    })}


   
        </>
  );
}

export default App;
