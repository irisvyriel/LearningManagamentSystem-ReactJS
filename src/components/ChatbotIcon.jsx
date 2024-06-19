import React, { useState } from 'react';
import Chatbots from './Chatbots'; 
import ChatbotsIcon from '../assets/images/ChatbotsIcon.jpg';

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleChatbot}
          className="p-0 border-none focus:outline-none"
        >
          <img src={ChatbotsIcon} alt="Chatbot Icon" className="w-12 h-12 rounded-full" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white border-4 rounded-lg shadow-lg w-96">
          <Chatbots onClose={toggleChatbot} />
        </div>
      )}
    </div>
  );
};

export default ChatbotIcon;
