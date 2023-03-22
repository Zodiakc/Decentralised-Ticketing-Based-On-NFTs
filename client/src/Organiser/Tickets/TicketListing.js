import React from "react";
import Ticket from "./Ticket";

function TicketListing() {
    return (
        <div className="container mx-auto grid grid-cols-4 items-center justify-center  ">
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
        </div>
    );
}

export default TicketListing;
