import React from "react";
import TicketCard from "../Ticket/TicketCard";
import TaskStatus from "../Ticket/TaskStatus";

const MainSection = ({ ticketList, inProgress, resolved, onSelect, onComplete }) => {
  return (
    <main className="flex flex-col md:flex-row gap-6 p-6 flex-1">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {ticketList.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onSelect={onSelect}
          />
        ))}
      </div>

      
      <div className="w-full md:w-1/3">
        <TaskStatus
          tasks={inProgress}
          resolved={resolved}
          onComplete={onComplete}
        />
      </div>
    </main>
  );
};

export default MainSection;
