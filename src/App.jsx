import { useState,useEffect } from "react";


function App() {

  // relaod component state and function
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
}

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

  return (<>
    <div key={seed} className="App">
      <h1>My favorite color is {color[0].id}!</h1>
    </div>
    {/* <button
      onClick={()=>{updateColor()}}
    >
      Invert
    </button> */}
    <button
      
      onClick={()=>{console.log(color)}}
    >
      Print Array
    </button>
      <br />
      <br />
      <br />

    {
    

      color.map((c)=>{
        return(
          <div  style={{fontSize:40}}>
           {c.status?<i onClick={()=>{updateColor(c.id)}} class="bi bi-balloon-heart"></i>:<i onClick={()=>{updateColor(c.id)}} class="bi bi-balloon-heart-fill"></i>}
        </div>
        )
      })
  

    }
        </>
  );
}

export default App;
