"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React from "react";

// import Games from "./Games";

type Database = any; // Replace with actual Supabase typings if available

type Tab = "dashboard" | "learning" | "calendar" | "messages" | "achievements";

const TabPanel = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}) => (
  <div className="flex flex-col items-center justify-center h-full text-center px-4">
    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800 dark:text-white">
      {title}
    </h2>
    <p className="text-slate-500 dark:text-slate-300 mb-4">{subtitle}</p>
    {children}
  </div>
);

export default function InternTabContent({ tab }: { tab: Tab }) {
  const { user, isLoaded } = useUser();
  const supabase = createClientComponentClient<Database>();

  const [modulesCompleted, setModulesCompleted] = useState(0);
  const [loading, setLoading] = useState(true);

  // State for popup/modal
  const [showChatPopup, setShowChatPopup] = useState(false);

  // Calendar state
  const today = new Date();
  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());

  useEffect(() => {
    if (!isLoaded || !user) return;

    const fetchInternData = async () => {
      setLoading(true);

      // Use module_reads for completed modules (no more careers_applications/intern_learning_progress)
      const { data: reads, error } = await supabase
        .from("module_reads")
        .select("id")
        .eq("user_id", user.id)
        .eq("read", true);

      if (error) {
        console.error("Error fetching module_reads:", error);
        setModulesCompleted(0);
      } else {
        setModulesCompleted(reads?.length ?? 0);
      }

      setLoading(false);
    };

    fetchInternData();
  }, [isLoaded, user, supabase]);

  if (!isLoaded || !user || loading) {
    return (
      <TabPanel title="Loading..." subtitle="Fetching your dashboard details." />
    );
  }

  // Example: Show modules completed in a card
  if (tab === "dashboard") {
    return (
      <TabPanel
        title="Your Progress"
        subtitle="Track your learning journey at Ecocee"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-xl bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900 dark:to-green-800 p-6 shadow flex flex-col items-center">
            <span className="text-4xl font-bold text-green-700">
              {modulesCompleted}
            </span>
            <span className="mt-2 text-lg font-semibold text-green-900 dark:text-green-100">
              Modules Completed
            </span>
          </div>
          <div className="mt-4 text-sm text-slate-500 dark:text-slate-300">
            If you face any issues, please contact admin@ecocee.com
          </div>
        </div>
      </TabPanel>
    );
  }

  // Messages tab with "coming soon" popup
  if (tab === "messages") {
    return (
      <TabPanel
        title="Messages"
        subtitle="Mentor & peer chat coming soon!"
      >
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold shadow hover:bg-green-700 transition"
          onClick={() => setShowChatPopup(true)}
        >
          Try Mentor & Peer Chat
        </button>
        {showChatPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg flex flex-col items-center">
              <h3 className="text-xl font-bold mb-2 text-green-700 dark:text-green-200">
                Coming Soon!
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 text-center">
                Mentor & peer chat features are coming soon to Ecocee.<br />
                Stay tuned for updates!
              </p>
              <button
                className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                onClick={() => setShowChatPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </TabPanel>
    );
  }

  // Calendar state
  // (Removed duplicate calendarMonth and calendarYear state declarations)

  // Helper to get days in month
  function getDaysInMonth(month: number, year: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  // Helper to get first day of week (0=Sunday)
  function getFirstDayOfWeek(month: number, year: number) {
    return new Date(year, month, 1).getDay();
  }

  // Calendar UI for "calendar" tab
  if (tab === "calendar") {
    const daysInMonth = getDaysInMonth(calendarMonth, calendarYear);
    const firstDay = getFirstDayOfWeek(calendarMonth, calendarYear);

    // Build calendar grid
    const weeks: (number | null)[][] = [];
    let week: (number | null)[] = [];
    let day = 1;

    // Fill first week
    for (let i = 0; i < 7; i++) {
      if (i < firstDay) {
        week.push(null);
      } else {
        week.push(day++);
      }
    }
    weeks.push(week);

    // Fill remaining weeks
    while (day <= daysInMonth) {
      week = [];
      for (let i = 0; i < 7; i++) {
        if (day <= daysInMonth) {
          week.push(day++);
        } else {
          week.push(null);
        }
      }
      weeks.push(week);
    }

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
      <TabPanel
        title="Calendar"
        subtitle="Ecocee style calendar with weekends highlighted"
      >
        <div className="flex flex-col items-center">
          {/* Month/Year navigation */}
          <div className="flex items-center gap-4 mb-4">
            <button
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-green-100 dark:hover:bg-green-900 shadow transition"
              onClick={() => {
                if (calendarMonth === 0) {
                  setCalendarMonth(11);
                  setCalendarYear(calendarYear - 1);
                } else {
                  setCalendarMonth(calendarMonth - 1);
                }
              }}
              aria-label="Previous Month"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <span className="font-semibold text-lg px-4 py-2 rounded bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-100 shadow">
              {monthNames[calendarMonth]} {calendarYear}
            </span>
            <button
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-green-100 dark:hover:bg-green-900 shadow transition"
              onClick={() => {
                if (calendarMonth === 11) {
                  setCalendarMonth(0);
                  setCalendarYear(calendarYear + 1);
                } else {
                  setCalendarMonth(calendarMonth + 1);
                }
              }}
              aria-label="Next Month"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          {/* Calendar card */}
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-4 border border-slate-100 dark:border-slate-800">
            <div className="grid grid-cols-7 mb-2">
              {weekDays.map((wd, idx) => (
                <div
                  key={wd}
                  className={`text-center font-semibold py-1 uppercase tracking-wide text-xs
                    ${
                      idx === 0
                        ? "text-red-600"
                        : idx === 6
                        ? "text-yellow-600"
                        : "text-slate-700 dark:text-slate-200"
                    }`}
                >
                  {wd}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {weeks.flat().map((date, idx) => {
                const col = idx % 7;
                const isToday =
                  date &&
                  calendarYear === today.getFullYear() &&
                  calendarMonth === today.getMonth() &&
                  date === today.getDate();
                return (
                  <div
                    key={idx}
                    className={`
                      h-12 flex items-center justify-center rounded-lg border relative
                      transition
                      ${
                        col === 0
                          ? "bg-red-100 text-red-700 border-red-200"
                          : col === 6
                          ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                          : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                      }
                      ${isToday ? "ring-2 ring-green-500 font-bold" : ""}
                      ${date ? "hover:bg-green-100 dark:hover:bg-green-900 cursor-pointer" : "opacity-0"}
                    `}
                  >
                    {date && (
                      <span className="relative">
                        {date}
                        {isToday && (
                          <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow">
                            Today
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </TabPanel>
    );
  }

  
  return null;
}
