import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { getDatabase, onValue, ref } from 'firebase/database';


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

  //console.log(personData)




  const showDetails = data => {
    setPersonDetails(data)


  }


  //console.log(personDetails)



  return (
    <div className="App">
      <Header personData={personData} />

      <div className='flex justify-between'>


        <LeftSideNav />


        <PersonDetails personDetails={personDetails} personImages={personImages} />


        <RightSideNav personData={personData} showDetails={showDetails} className="h-screen" />


        <GetImages setPersonImages={setPersonImages} personImages={personImages} />



      </div>
    </div>
  );
}

export default App;
