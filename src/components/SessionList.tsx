import React from 'react';

interface SessionListProps {
    sessions: any[];
    onSessionClick: (session: any) => void;
    selectedSessionId: number | null;
}

const SessionList: React.FC<SessionListProps> = ({ sessions, onSessionClick, selectedSessionId }) => {
    return (
        <div>
            {sessions.map((session) => (
                <div className='w-full' key={session.id}>
                    <div
                        className={`py-[10px] mb-1 px-[20px] cursor-pointer rounded-xl border-b-2 h-[72px] transition-colors duration-200
                            ${selectedSessionId === session.id ? 'bg-[#C8C8FF]' : 'hover:bg-[#F0F0FF]'}`}
                        onClick={() => onSessionClick(session)}
                    >
                        <div className='flex space-x-4'>
                            <img src='/People.png' alt="Session Avatar" />
                            <div>
                                <h3 className='text-[14px] font-medium'>Session {session.id}</h3>
                                <h4 className='text-[14px] font-medium line-clamp-1'>{session.name}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SessionList;