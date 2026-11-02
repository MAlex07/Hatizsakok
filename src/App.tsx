import { useState } from 'react'
//import bootstrap from 'bootstrap/js/dist'


interface Hatizsakok{
  id: number;
  marka: string;
  meret: number;
  ar: number;
  elerheto: boolean;
}

const hatizsakok: Hatizsakok[] = [
  {
    id: 1,
    marka: "Nike",
    meret: 25,
    ar: 12990,
    elerheto: true
  },
  {
    id: 2,
    marka: "Adidas",
    meret: 30,
    ar: 15990,
    elerheto: true
  },
  {
    id: 3,
    marka: "Puma",
    meret: 20,
    ar: 9990,
    elerheto: false
  },
  {
    id: 4,
    marka: "Under Armour",
    meret: 35,
    ar: 18990,
    elerheto: true
  },
  {
    id: 5,
    marka: "Herschel",
    meret: 28,
    ar: 24990,
    elerheto: false
  }
];

function App() {
  

  return (
    <>
      <Fejlec></Fejlec>
      <Megjelenit></Megjelenit>
      <Lablec></Lablec>
    </>
  )
}

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


function Megjelenit(){
  
  return(<>
    <div>
    <table>
      <thead>
        <th>Márka</th>
        <th>Méret</th>
        <th>Ár</th>
        <th>Elérhetőség</th>
      </thead>
      <tbody>
        {hatizsakok.map((hatizsak, index) => (
          <tr key={index}>
            <td>{hatizsak.marka}</td>
            <td>{hatizsak.meret}</td>
            <td>{hatizsak.ar}</td>
            <td>{hatizsak.elerheto ? "igen" : "nem"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  </>)
  
}


function Lablec(){
  return(
    <>
      <footer>
        <hr />

        <p>Molnár Alex 13.E</p>
        <p>Készült: 2026. 11. 02.</p>
      </footer>
    </>
  )
}

export default App
