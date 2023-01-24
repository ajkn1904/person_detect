import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import database from './Firebase/firebase.config';
import { getDatabase, onValue, ref } from 'firebase/database';

//import { doc, getDoc } from "firebase/firestore";


import LeftSideNav from './Components/SideNav/LeftSideNav';
import RightSideNav from './Components/SideNav/RightSideNav';
import PersonDetails from './Components/PersonDetails/PersonDetails';
import GetImages from './Components/GetImages/GetImages';

const db = getDatabase();

function App() {

  const [personData, setPersonData] = useState([]);
  const [personDetails, setPersonDetails] = useState([]);
 const [personImages, setPersonImages] = useState({});

  const databaseRef = ref(db);
  
  //let personId = {};



  useEffect(() => {

    const unsubscribe = onValue(databaseRef, (snapshot) => {
      setPersonData(snapshot.val());
    });
    return () => unsubscribe();

  }, []);




  console.log(personData)


  const showDetails = data => {
    //console.log(id)
    setPersonDetails(data)


  }


  //console.log(personDetails)



  return (
    <div className="App">
      <Header />

      <div className='flex justify-between'>
        
        
        <LeftSideNav />
        

        <PersonDetails personDetails={personDetails} personImages={personImages}/>
        

        <RightSideNav personData={personData} showDetails={showDetails} personImages={personImages}  setPersonData={setPersonData} databaseRef={databaseRef} db={db} className="h-screen" />
        

        <GetImages setPersonImages={setPersonImages} personImages={personImages} />



      </div>
    </div>
  );
}

export default App;
