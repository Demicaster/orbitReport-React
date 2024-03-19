import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  
  let buttons = displaySats.map((sat, id) => {
    return (
   
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
   
    );
  })
  let secondButton = <button onClick={() => {setSat(satData)}}>
    All Orbits
  </button>
  buttons.push(secondButton);
  return  (   <div>{buttons}</div>) ;
  
}


export default Buttons;