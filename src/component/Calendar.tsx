import React from 'react';

const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

// 2025년 7월의 날짜 배열 (7월 1일은 화요일)
const calendarData = [
  [null, 1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12, 13],
  [14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, null, null, null],
];

const Calendar = () => {
  return (
    <div className="max-w-md mx-auto p-4 font-weight-400 font-nanum-gothic">
      <div className="grid grid-cols-7 gap-1 text-center text-stone-800">
        {calendarData.flat().map((date, idx) => {
          const isJuly5 = date === 5;
          return (
            <div
              key={idx}
              className={`py-1 rounded ${date
                ? isJuly5
                  ? 'bg-stone-400 text-white font-bold'
                  : 'hover:bg-gray-100'
                : ''
                }`}
            >
              {date || ''}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
