import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

const Chatbots = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?', timestamp: '12:00 PM' }
  ]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessages = [
      ...messages,
      { sender: 'user', text: input, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ];
    const botResponse = getBotResponse(input);
    setMessages([
      ...newMessages,
      { sender: 'bot', text: botResponse, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]);
    setInput('');
  };

  const getBotResponse = (userMessage) => {
    const responses = {
      hello: 'Hi there! How can I help you?',
      help: 'Sure, I am here to help you. Please provide more details.',
      bye: 'Goodbye! Have a great day!',
      'siapa saja siswa yang tidak aktif?': 'Berdasarkan Data ada siswa bernama Kate Miller dan Alice Brown.',
      'siswa yang paling aktif di universtias ini siapa?': 'Siswa bernama Vincent Christian paling aktif di kursus ini dengan persentanse kehadiran 100%',
      'ada berapa mata kuliah di universitas ini?': 'Ada 4 mata kuliah di Universitas AthenaIQ ini yang terdiri dari ComputerScience, Economy, Machine Learning, Artificial',
    };

    return responses[userMessage.toLowerCase()] || "I'm sorry, I don't understand that.";
  };

  return (
    <div className="relative p-4 h-96 flex flex-col justify-between border-2 rounded-lg shadow-lg bg-white ">
      <div className="flex items-center justify-between bg-purple-700 text-white p-3 rounded-t-lg">
        <h2 className="text-lg font-semibold">AthenaIQ Assistant</h2>
        <button onClick={onClose} className="text-xl">
          <IoMdClose />
        </button>
      </div>
      <div className="messages flex-1 space-y-4 p-3 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-3 rounded-md max-w-xs ${
                message.sender === 'user' ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.text}
              <div className="text-xs text-gray-400 mt-1">{message.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center border-t p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Type here and press enter to chat"
          className="flex-1 p-2 border rounded-l-lg focus:outline-none text-black"
        />
        <button
          onClick={handleSendMessage}
          className="bg-purple-700 text-white p-3 rounded-r-lg hover:bg-purple-800"
        >
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};

export default Chatbots;
