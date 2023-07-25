import { React, useState, useEffect } from "react";

function AddItem() {
  const [item, setitem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("https://api.publicapis.org/entries");
      let data = await response.json();

      setitem(data.entries);
      return () => {};
    };
    fetchData();
  }, []);

 let HandleClick=(index)=>{

 let Newvalue= item.filter((e)=>e.API!==index.API )
 setitem(Newvalue)
  }

  return (
    <>
      {item.map((val,index) => {
        return (
          <div key={index} style={{display:"flex"}}>
            <h2>
              </h2><span>{val.API}</span>
            <span>
              <button onClick={()=>HandleClick(val)}>delete</button>
            </span>
          </div>
        );
      })}
    </>
  );
}

export default AddItem;
