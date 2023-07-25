import React, { useState, useRef, useMemo, useEffect } from "react";
import "./input.css"

function Inputcomp() {
  const inputRef = useRef();
  const inputref = useRef();
  let initialData=localStorage.getItem("data")?JSON.parse(localStorage.getItem('data')):[]
  let [data, setdata] = useState(initialData);
  const [name, setname] = useState("");
  const [area, setarea] = useState("");

  const Handlechange = (e) => {
    inputRef.current.focus();
    setname(e.target.value);
  };
  const HandleAreaChange = (e) => {
    inputref.current.focus();
    setarea(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  let HandleClick = (index) => {
    let Newvalue = data.filter((e,i) => i !== index);
    setdata(Newvalue);
  };

  const HandleSubmit = useMemo(
    () => (event) => {
      event.preventDefault();

      const newObj = { name: name, area: area };

      let newArray = [...data, newObj];

      setdata(newArray);

      setarea("");
      setname("");
    },
    [name, area]
  );

  return (
    <div className="body-background">
      <h2>✔TODO APP ✔</h2>
      <form action="" onSubmit={HandleSubmit}>
        <input
        id="myInput"
          required
          type="text"
          placeholder="add text"
          value={name}
          ref={inputRef}
          onChange={Handlechange}
        />
        <br />
        <textarea
        id="myInput"
          required
          placeholder=" text area"
          value={area}
          ref={inputref}
          onChange={HandleAreaChange}
        ></textarea>
        <br />
        <button className="add">ADD</button>
      </form>
      <section >
        {data.length <= 0 ? (
          <h2>add some value</h2>
        ) : (
          <div style={{textAlign:"center", backgroundColor:"wheat"}}>
            <h2>Todo list</h2>
            {data.map((e, index) => (
              <div className="section-todo" key={index}>
                <h3>Name:{e.name}</h3>
                <h3>Description:{e.area}</h3>
                <button className="delete" onClick={() => HandleClick(index)}>delete</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Inputcomp;
