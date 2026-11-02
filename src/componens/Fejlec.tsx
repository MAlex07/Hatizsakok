import { useState } from 'react'


function Fejlec(){
  const [menu, setMenu] = useState("index");
  
  return(
    <>
        <a href="" onClick={() => setMenu("index")}>Kezdőlap</a>
        <a href="" onClick={() => setMenu("admin")}>Admin</a>
        <a href="" onClick={() => setMenu("moderator")}>Moderátor</a>

        <hr />

        {menu === "index" && (
        <div>
          <h2>Kezdőlap</h2>
        </div>
      )}
 
      {menu === "admin" && (
        <div>
          <h2>Admin</h2>
        </div>
      )}
 
      {menu === "moderator" && (
        <div>
          <h2>Moderátor</h2>
        </div>
      )}
    </>
  )
}

export default Fejlec