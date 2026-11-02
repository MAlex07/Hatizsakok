import { useState } from 'react'
import { hatizsakok } from './data/hatizsakok';
import Fejlec from './componens/Fejlec';
import Megjelenit from './componens/Megjelenit';
import Lablec from './componens/Lablec';
//import bootstrap from 'bootstrap/js/dist'






function App() {
  

  return (
    <>
      <Fejlec></Fejlec>
      <Megjelenit></Megjelenit>
      <Lablec></Lablec>
    </>
  )
}

export default App
