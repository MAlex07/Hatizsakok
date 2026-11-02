import { useState } from 'react'


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
      
    </>
  )
}

export default App
