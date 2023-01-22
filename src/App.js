import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import database from './Firebase/firebase.config';
import { getDatabase, onValue, ref } from 'firebase/database';
import LeftSideNav from './Components/Header/SideNav/LeftSideNav';

const db = getDatabase();

function App() {

  const [personData, setPersonData] = useState([]);

  const databaseRef = ref(db);

  useEffect(() => {

    const unsubscribe = onValue(databaseRef, (snapshot) => {
      setPersonData(snapshot.val());
    });
    return () => unsubscribe();

  }, []);

  console.log(personData)

  return (
    <div className="App">
      <Header />

      <div className='flex'>
        <LeftSideNav />
      </div>
    </div>
  );
}

export default App;
