import { useState,useEffect } from "react";
import './app.css'

function App() {

  // relaod component state and function
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
}

const [people, setPeople] = useState(
  [{
  "id": 1,
  "task": "Give dog a bath",
  "complete": true
}, {
  "id": 2,
  "task": "Do laundry",
  "complete": true
}, {
  "id": 3,
  "task": "Vacuum floor",
  "complete": false
}, {
  "id": 4,
  "task": "Feed cat",
  "complete": true
}, {
  "id": 5,
  "task": "Change light bulbs",
  "complete": false
}, {
  "id": 6,
  "task": "Go to Store",
  "complete": true
}, {
  "id": 7,
  "task": "Fill gas tank",
  "complete": true
},
]
)
// to create add
const [ userInput, setUserInput ] = useState('');

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
      
      onClick={()=>{console.log(color)}}
    >
      Print Array
    </button>
      <br />
      <br />
      <br />

      <form action="">
       
        <button type="submit">Submit</button>
      </form>

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
          <span>{p.id} - {p.task}</span>
          <button onClick={ () => { handleDelete(p.id) } }>Del</button>
        </div>
      )
    })}


   
        </>
  );
}

export default App;
