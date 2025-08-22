import React, { useState, useEffect } from 'react';
import './SlotBooking.css';

const SlotBooking = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');

  const getMonthOptions = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const nextMonth = (currentMonth + 1) % 12;

    return [
      { value: currentMonth, label: today.toLocaleString('default', { month: 'long' }) },
      { value: nextMonth, label: new Date(today.getFullYear(), nextMonth).toLocaleString('default', { month: 'long' }) }
    ];
  };

  useEffect(() => {
    if (year && month !== '') {
      const daysInMonth = new Date(year, parseInt(month) + 1, 0).getDate();
      const newDates = Array.from({ length: daysInMonth }, (_, i) => i + 1);
      setDates(newDates);
    } else {
      setDates([]);
    }
  }, [year, month]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Slot booked for: ${selectedDate}-${parseInt(month) + 1}-${year}`);
  };

  return (
    <div className="slot-booking-container">
      <h1>RationX</h1>
      <h2>Slot Booking</h2>

      <form onSubmit={handleSubmit} className="form-section">
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="year">Year</label>
            <input
              type="number"
              id="year"
              placeholder="Enter Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>

          {year && (
            <div className="input-group">
              <label htmlFor="month">Month</label>
              <select
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                required
              >
                <option value="">Select Month</option>
                {getMonthOptions().map((m) => (
                  <option key={m.value} value={m.value}>{m.label}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {dates.length > 0 && (
          <div className="calendar-grid">
            {dates.map((date) => (
              <div
                key={date}
                className={`calendar-box ${selectedDate === date ? 'selected' : ''}`}
                onClick={() => setSelectedDate(date)}
              >
                {date}
              </div>
            ))}
          </div>
        )}

        {selectedDate && (
          <button type="submit" className="submit-button">Submit</button>
        )}
      </form>
    </div>
  );
};

export default SlotBooking;
