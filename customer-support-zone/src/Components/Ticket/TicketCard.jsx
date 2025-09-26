// TicketCard.jsx
import React from "react";
import { Calendar } from "lucide-react";

const TicketCard = ({ ticket, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(ticket)}
      className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition"
    >
      <h3 className="text-base font-semibold mb-1">{ticket.title}</h3>
      <p className="text-sm text-gray-600 mb-3">{ticket.description}</p>

      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="font-medium text-gray-700">#{ticket.id}</span>

        {/* Priority Badge */}
        <span
          className={`px-2 py-0.5 rounded-full font-semibold
          ${
            ticket.priority === "HIGH PRIORITY"
              ? "bg-red-100 text-red-600"
              : ticket.priority === "MEDIUM PRIORITY"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {ticket.priority}
        </span>

        <span className="text-gray-800 font-medium">{ticket.customer}</span>

        <span className="flex items-center gap-1 text-gray-500">
          <Calendar size={14} />
          {ticket.createdAt}
        </span>

        {/* Status Badge */}
        <span
          className={`px-3 py-0.5 rounded-full font-medium
          ${
            ticket.status === "Open"
              ? "bg-green-100 text-green-600"
              : ticket.status === "In-Progress"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-blue-100 text-blue-600"
          }`}
        >
          {ticket.status}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;
