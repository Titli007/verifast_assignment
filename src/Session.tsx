import axios from 'axios';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Chat from './components/Chat';
import SessionList from './components/SessionList';

const Session = () => {
  const [sessions, setSessions] = useState<any[]>([]);
  const [selectedSession, setSelectedSession] = useState<any | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchSessions = async () => {
    try {
      const res = await axios.get(
        `https://admin-backend-docker-india-306034828043.asia-south2.run.app/nlp/api/chat_sessions?page=${page}&per_page=20`
      );
      const newSessions = res.data.chat_sessions;
      setSessions((prevSessions) => {
        const updatedSessions = [...prevSessions, ...newSessions];
        
        // If this is the first fetch and we have sessions, set the first one as selected
        if (page === 1 && updatedSessions.length > 0 && !selectedSession) {
          setSelectedSession(updatedSessions[0]);
        }
        
        return updatedSessions;
      });
      setPage((prevPage) => prevPage + 1);
      setHasMore(newSessions.length > 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleSessionClick = (session: any) => {
    console.log(session.id);
    setSelectedSession(session);
  };

  return (
    <div className='h-screen w-screen px-4'>
      <div className='flex'>
        <div className='h-screen w-[360px] mr-4'>
          <h1 className='text-[24px] font-semibold p-4 my-2 '>Messaging</h1>
          <InfiniteScroll
            dataLength={sessions.length}
            next={fetchSessions}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            height={window.innerHeight - 100}
          >
            <SessionList 
              sessions={sessions} 
              onSessionClick={handleSessionClick}
            />
          </InfiniteScroll>
        </div>

        {selectedSession ? (
          <div className='scroll-smooth overflow-y-auto h-screen flex-1'>
            <div className='flex space-x-4 items-center h-[100px]'>
              <img className='h-max' src='/People.png' alt="People" />
              <h3 className='text-[16px] font-semibold'>{selectedSession.name}</h3>
            </div>
            <Chat messages={selectedSession.messages} />
          </div>
        ) : (
          <p>Loading sessions...</p>
        )}
      </div>
    </div>
  );
};

export default Session;