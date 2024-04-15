import { useState } from "react";

const Body = () => {

  const [open, setOpen] = useState(false);


  //re-render
  const changeShow = () => {
    setOpen(!open);
  };

  return (
    <main className="container pt-12">
   
      <button onClick={changeShow} className="bg-gray-500">
        {open === true ? "hide" : "show"}
      </button>
      {open === true && <h1>Otobek show</h1>}
    </main>
  );
};

export default Body;
