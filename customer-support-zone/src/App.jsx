import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";
import { tickets } from "./Components/Ticket/tickets";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [ticketList, setTicketList] = useState(tickets);
  const [inProgress, setInProgress] = useState([]);
  const [resolved, setResolved] = useState([]);

  const handleSelectTicket = (ticket) => {
    if (!inProgress.find((t) => t.id === ticket.id)) {
      setInProgress([...inProgress, ticket]);
      setTicketList(ticketList.filter((t) => t.id !== ticket.id));
      toast.info(`"${ticket.title}" moved to In Progress`);
    }
  };

  const handleComplete = (ticket) => {
    setInProgress(inProgress.filter((t) => t.id !== ticket.id));
    setResolved([...resolved, ticket]);
    toast.success(`"${ticket.title}" marked as Resolved ✅`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Banner inProgress={inProgress.length} resolved={resolved.length} />

    
      <MainSection
        ticketList={ticketList}
        inProgress={inProgress}
        resolved={resolved}
        onSelect={handleSelectTicket}
        onComplete={handleComplete}
      />

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default App;
