import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import ChatContainer from "../components/ChatContainer";
import Contacts from "../components/Contacts";
import Welcome from "../components/Welcome";
const server = "https://marketdb.herokuapp.com";

export default function MyChats() {
  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    if (!localStorage.getItem("_id")) {
      navigate("/login");
    } else {
      async function fetchUserData() {
        setCurrentUser(localStorage.getItem("_id"));
      }
      fetchUserData();
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(server);
      socket.current.emit("add-user", currentUser);
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        const data = await axios.get(server);
        console.log(data.data);
        const oldContacts = await fetch(server + "/contact", {
          method: "POST",
          headers : {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: currentUser }),
        })
        const contactData = await oldContacts.json();
        console.log(contactData)
        setContacts(data.data.filter(item => JSON.parse(contactData[0].contacts).includes(item._id)));
      }
      fetchData();
    }
  }, [currentUser]);

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };
  
  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
