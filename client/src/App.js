import './styles/thailwind.css';
import React, { useState, useEffect } from 'react';
import Header from './partials/header';
import Map from './map/map';


function App() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('/api')
  //     .then(res => res.json())
  //     .then(data => setData(data.users))
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <div >
      <Header/>

      
      
      {/* {!data ? (
        <p>Loading...</p>
      ) : (
        Array.isArray(data) ? ( 
          data.map((user, index) => <p className="text-gray-500 text-lg" key={index}>{user}</p>)
        ) : (
          <p>Data is not in the expected format.</p>
        )
      )} */}
    </div>
  );
}
export default App;