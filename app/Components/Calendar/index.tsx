import React from 'react';

const Calendar = () => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const totalDays = 31; // Total de dias no mês

  return (
    <div className="calendar grid grid-cols-7 gap-1 w-72 mx-auto bg-gray-200">
      {/* Cabeçalho dos dias da semana */}
      {daysOfWeek.map((day) => (
        <div
          key={day}
          className="day flex items-center justify-center h-10 bg-white border border-gray-300 text-gray-700 font-medium"
        >
          {day}
        </div>
      ))}

      {/* Dias do mês */}
      {Array.from({ length: totalDays }).map((_, index) => (
        <div
          key={index}
          className="day flex items-center justify-center h-10 bg-white border border-gray-300"
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
