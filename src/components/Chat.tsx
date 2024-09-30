import { format, isToday, isYesterday } from 'date-fns';

interface Message {
  content: string;
  action: string;
  timestamp: string;
}

interface ChatProps {
  messages: Message[];
}

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  if (isToday(date)) {
    return `Today ${format(date, 'HH:mm')}`;
  } else if (isYesterday(date)) {
    return `Yesterday ${format(date, 'HH:mm')}`;
  } else {
    return format(date, 'MMM d, yyyy HH:mm');
  }
};

const Chat: React.FC<ChatProps> = ({ messages }) => {
  console.log(messages);
  return (
    <div className="flex flex-col p-4 space-y-4 bg-[#F7F7FD]">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`w-full flex flex-col ${message.action !== 'AI' ? 'items-end' : 'items-start'}`}
        >
          <div
            className={`p-3 rounded-lg max-w-xs text-[14px] text-white ${
              message.action === 'AI' ? 'bg-[#000929]' : 'bg-[#2E3B5B]'
            }`}
          >
            {message.content}
          </div>
          <span className="text-xs text-gray-500 mr-1 mt-3">
            {formatTimestamp(message.timestamp)}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Chat;