import React from 'react';

interface SessionListProps {
    sessions: any[];
    onSessionClick: (session: any) => void;
}

const SessionList: React.FC<SessionListProps> = ({ sessions, onSessionClick }) => {
    
    return (
        <div>
            {/* List of chat sessions */}
            {sessions.map((session) => (
                <div className='w-full'>
                    <div className='py-[10px] mb-1 px-[20px] cursor-pointer hover:bg-[#C8C8FF] rounded-xl border-b-2 h-[72px]'
                        key={session.id}
                        onClick={() => onSessionClick(session)}>
                        <div className='flex space-x-4'>
                        <img src='/People.png'/>
                        <div>
                        <h3 className='text-[14px] font-medium'>Session {session.id}</h3>
                        <h4 className='text-[14px] font-medium line-clamp-1'>{session.name}</h4>
                        </div>
                        </div>
                        {/* <p>Messages: {session.message_count}</p> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SessionList;
