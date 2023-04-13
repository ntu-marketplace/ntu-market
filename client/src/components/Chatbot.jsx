// Chatbot.js
import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import IconImg from "../media/chat_icon.png";

const enlarge = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 80px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const ChatIcon = styled.div`
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  background-color: #181C62;
  border-radius: 50%;
`;

const ChatWindow = styled.div`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  animation: ${enlarge} 0.3s;
  transform-origin: bottom right;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #2196f3;
  color: white;
  font-weight: bold;
`;

const CloseIcon = styled.div`
  cursor: pointer;
`;

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1;
  padding: 10px;
`;

const InputContainer = styled.form`
  display: flex;
  padding: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border-radius: 10px;
  border: none;
  outline: none;
`;

const UserMessage = styled.div`
  align-self: flex-end;
  background-color: #2196f3;
  color: white;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 10px;
  max-width: 50%;
  word-wrap: break-word;
`;

const BotMessage = styled.div`
  align-self: flex-start;
  background-color: #f5f5f5;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 10px;
  max-width: 50%;
  word-wrap: break-word;
`;


const useTypingEffect = (text, typingSpeed = 50) => {
  const [displayedText, setDisplayedText] = useState(text[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length - 1) {
        index++;
        setDisplayedText((prevText) => (prevText + text[index]));
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return displayedText;
};

const BotMessageContainer = ({ message }) => {
  const displayedText = useTypingEffect(message, 50);

  return (
    <BotMessage>
      {displayedText}
    </BotMessage>
  );
};


const Chatbot = ({ show, setShow }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { type: "user", text: input }])
      setInput("");
      fetchBotResponse(input, [...messages, { type: "user", text: input }]);
    }
  };

  const fetchBotResponse = async (input, prevMessages) => {
    // Fetch the bot response from the server and display it with typing animation
    const response = await fetch("https://marketdb.herokuapp.com/chatbot", {
      method: "POST",
      body: JSON.stringify({ prompt: input }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data.trim());
    console.log(messages)
    setMessages([...prevMessages, { type: "bot", text: data.trim() }]);
  }

    return (
        <Container>
            <ChatIcon style={{backgroundImage: "url(" + IconImg + ")", display: show ? "none" : "", alignSelf:'flex-end'}} onClick={() => setShow(!show)} />
            <ChatWindow show={show}>
                <Header>
                    <span>Chatbot</span>
                    <CloseIcon onClick={() => setShow(false)}>{`✕`}</CloseIcon>
                </Header>
                <MessagesContainer ref={messagesRef}>
                    {messages.map((message, index) => (
                        <React.Fragment key={index}>
                            {message.type === "user" ? (
                                <UserMessage>{message.text}</UserMessage>
                                ) : (
                                <BotMessageContainer message={message.text} />
                            )}
                        </React.Fragment>
                    ))}
                </MessagesContainer>
                <InputContainer onSubmit={handleSubmit}>
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                    />
                </InputContainer>
            </ChatWindow>
        </Container>
    );
};
        
export default Chatbot;
        
        