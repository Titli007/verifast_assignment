import React from 'react';

interface Message {
  content: string;
  action: string; // 'user' or 'ai'
}

interface ChatProps {
  messages: Message[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="flex flex-col p-4 space-y-4 bg-[#F7F7FD]">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`w-full flex ${message.action !== 'AI' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`p-3 rounded-lg max-w-xs text-[14px] text-white ${
              message.action === 'AI' ? 'bg-[#000929]' : 'bg-[#2E3B5B]'
            }`}
          >
            {message.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;

