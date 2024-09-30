import axios from 'axios'
import { useEffect, useState } from 'react'
import Session from './Session'

function App() {

  // const[msg, setMsg] = useState([""])

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://admin-backend-docker-india-306034828043.asia-south2.run.app/nlp/api/chat_sessions?page=1&per_page=5"
  //       );
  //       setMsg(res.data); // Store the response in msg state
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
    
  // }, [])

  // console.log(msg)

  return (
    <>
      <Session />
    </>
  )
}

export default App
