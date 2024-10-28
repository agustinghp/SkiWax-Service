"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    fetch('/api/times')
      .then((response) => response.json())
      .then((data) => setAvailableTimes(data));
  }, []);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    fetch('/api/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ time: selectedTime }),
    }).then((response) => {
      if (response.ok) {
        alert('Booking confirmed!');
      } else {
        alert('Error booking time.');
      }
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <Head>
        <title>Ski Wax Booking</title>
        <meta name="description" content="Reserve a time to get your skis waxed" />
      </Head>
      <main className="w-full flex flex-col items-center justify-center">
        <section className="text-center bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4 text-blue-700">Ski Wax Service</h1>
          <p className="text-lg text-gray-600 mb-6">Reserve your time for ski waxing.</p>
          <div>
            <h2 className="text-2xl font-bold mb-2 text-blue-700">Available Times:</h2>
            <ul className="text-left mb-4">
              {availableTimes.map((time) => (
                <li
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`cursor-pointer hover:text-blue-600 ${selectedTime === time ? 'font-bold text-blue-600' : ''}`}
                >
                  {time}
                </li>
              ))}
            </ul>
            {selectedTime && (
              <div className="mt-4">
                <p className="text-lg text-blue-700 mb-2">Selected Time: {selectedTime}</p>
                <button
                  onClick={handleBooking}
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
                >
                  Confirm Booking
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <footer className="w-full text-center py-4 bg-gray-200 text-gray-600 mt-auto">
        © 2024 Ski Wax Business. All rights reserved.
      </footer>
    </div>
  );
}
