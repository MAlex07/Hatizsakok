import { hatizsakok } from "../data/hatizsakok"

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

export default Megjelenit