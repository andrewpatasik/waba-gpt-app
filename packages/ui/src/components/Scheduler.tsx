"use client";
import { useState } from "react";
import {
  Calendar,
  CalendarCurrentDate,
  CalendarMonthView,
  CalendarNextTrigger,
  CalendarPrevTrigger,
  CalendarTodayTrigger,
} from "./ui/calendar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Modal from "./Modal";

const Scheduler = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <Calendar
        onSelectedDate={() => setOpen(!open)}
        events={[
          {
            id: "1",
            start: new Date("2024-12-26T09:30:00Z"),
            end: new Date("2024-12-26T14:30:00Z"),
            title: "event A",
            color: "pink",
          },
          {
            id: "2",
            start: new Date("2024-12-26T10:00:00Z"),
            end: new Date("2024-12-26T10:30:00Z"),
            title: "event B",
            color: "blue",
          },
        ]}
      >
        <div className="h-dvh py-6 flex flex-col">
          <div className="flex px-6 items-center gap-2 mb-6">
            <span className="flex-1" />

            <CalendarCurrentDate />

            <CalendarPrevTrigger>
              <ChevronLeft size={20} />
              <span className="sr-only">Previous</span>
            </CalendarPrevTrigger>

            <CalendarTodayTrigger>Today</CalendarTodayTrigger>

            <CalendarNextTrigger>
              <ChevronRight size={20} />
              <span className="sr-only">Next</span>
            </CalendarNextTrigger>
          </div>

          <div className="flex-1 overflow-auto px-6 relative">
            <CalendarMonthView />
          </div>
        </div>
      </Calendar>
    </>
  );
};

export default Scheduler;
