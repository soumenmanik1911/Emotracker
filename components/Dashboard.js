'use client';
import React, { useEffect , useState } from 'react'

import Calender from './Calender'
import { useAuth } from '@/context/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import Loading from './Loading';
import Login from './Login';
// Importing Open Sans font

const Dashboard = () => {
  const { currentUser, userDataObj, setUserDataObj, loading} = useAuth();
  const [data, setData] = useState({});
  const now = new Date()

  //count days and streak and moods

  function countValues() {
    let total_number_of_days = 0;
    let sum_moods = 0;
  
    if (!data || Object.keys(data).length === 0) {
      return { streak: 0, average_mood: 0 };
    }
  
    for (let year in data) {
      for (let month in data[year]) {
        for (let day in data[year][month]) {
          const days_mood = data[year][month][day];
          total_number_of_days++;
          sum_moods += days_mood;
        }
      }
    }
  
    const average_mood = total_number_of_days > 0 ? sum_moods / total_number_of_days : 0;
    return { streak: total_number_of_days, average_mood };
  }
  

  const [statuses, setStatuses] = useState({
    streak: 0 ,
    average_mood: 0,
    time_remaining: `${23 - now.getHours()} hours ${59 - now.getMinutes()} minutes ${59 - now.getSeconds()} seconds`,
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setStatuses((prevStatuses) => ({
        ...prevStatuses,
        time_remaining: `${23 - now.getHours()} hours ${59 - now.getMinutes()} minutes ${59 - now.getSeconds()} seconds`,
      }));
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    // Update statuses when `data` changes
    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      ...countValues(), // Recalculate streak and average_mood
    }));
  }, [data]);
  

  useEffect(() => {
      const interval = setInterval(() => {
          const now = new Date();
          setStatuses(prevStatuses => ({
              ...prevStatuses,
              time_remaining: `${23 - now.getHours()} hours ${59 - now.getMinutes()} minutes ${59 - now.getSeconds()} seconds`,
          }));
      }, 1000);

      return () => clearInterval(interval);
  }, []);



 async function handleSetMood(mood) {
  //i have to change this line
 
  const day = now.getDate()
    const month = now.getMonth()
    const year = now.getFullYear()
  try {
    const newData ={...userDataObj}
    if (!newData?. [year]) {
      newData [year] = {}
    }
    if (!newData?. [year]?. [month]) {
      newData [year] [month] = {}
    }
    newData [year] [month] [day] = mood

  
  //update current state
  setData(newData)
  //update global state
  setUserDataObj(newData)
  //update firebase
  const docRef = doc(db, 'users', currentUser.uid)
  const res = await setDoc (docRef, {
    [year]: {
      [month]: {
        [day]: mood
      }

    }

  } ,{merge: true})
 



}catch (error) {
  console.log('failed', error.message)
}
}
//



    const moods = {
        
        sad: '😢',
        angry: '😠',
        excited: '😆',
        
        happy: '😊',
        relaxed: '😌'
    }
    useEffect(() => { 
      if (!currentUser || !userDataObj) {
        return
      }
      setData(userDataObj)
    }, [currentUser, userDataObj]);

    
    //login function
    if (loading) {
      return <Loading />
    }
  
    if (!currentUser) {
      return <Login />
    } 


return (
    <div className='flex-1 flex flex-col p-4'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 bg-indigo-100 p-4 rounded-lg'>
            {Object.keys(statuses).map((key, index) => (
                <div key={index} className='p-4 flex flex-col gap-2 justify-center items-center bg-white shadow-md rounded-lg'>
                    <div className='capitalize text-xl font-semibold'>{key}:</div>
                    <div className='status text-lg'>
        {statuses[key]} {key === 'streak' ? '🔥' : ''}
      </div>
                </div>
            ))}
        </div>

        <h4 className=' feel mt-6 text-center text-4xl sm:text-5xl md:text-6xl font-bold py-2'>
            <span>How You</span>
            <span className='feeltwo' > Feel</span>
            <span> Today?</span>
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
  {Object.keys(moods).map((mood, moodIndex) => (
    <button onClick={() => {
      const currentMoodValue = moodIndex + 1
      handleSetMood(currentMoodValue)
    }} 
      key={moodIndex}
      className={`rounded-full overflow-hidden goodbutton  ${
        moodIndex === 4
          ? '  col-span-2 sm:col-span-1 '
          : ''
      }`}
    >
      <p className="text-center  font-medium text-5xl">{moods[mood]}</p>
      <p className="text-center font-bold text-sm  uppercase">{mood}</p>
    </button>
  ))}
</div>
<Calender completeData={data} handleSetMood={handleSetMood}/>

    </div>
)
}

export default Dashboard
