const Table = ({ sat }) => {

 
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     <tbody>
     {sat.map((data, id) =>{
      let statusCheck;
      if(data.operational == true){
        statusCheck = "satellite is active."

      }
      else{
        statusCheck = "satellite  is inactive "
      }
    return(
      <tr key={id}>
    <th>{data.name}</th>
    <th>{data.type}</th>
    <th>{data.launchDate}</th>
    <th>{data.orbitType}</th>
    <th>{statusCheck}</th>
    
    </tr>
  )
  })}
     </tbody>
   </table>
  );
};

export default Table;