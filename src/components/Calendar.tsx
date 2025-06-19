
import RingSVG from './../../public/images/ring-svg';

const daysOfWeek = ['Երկ', 'Երք', 'Չրք', 'Հնգ', 'Ուրբ', 'Շբթ', 'Կիր'];
const days = [21, 22, 23, 24, 25, 26, 27];

const Calendar = () => {
  return (
    <>
      <h2 className="calendar-title">Հուլիս</h2>

      <div className="days-of-week">
        {daysOfWeek.map((d, i) => (
          <div key={i} className="day-label">
            {d}
          </div>
        ))}
      </div>

      <div className="calendar-days">
        {days.map((day) => (
          <div
            key={day}
            className={`calendar-day ${day === 16 ? 'selected' : ''}`}
          >
            {day === 21 && (
                <div className="ring-icon-svg">
                    <RingSVG />
                </div>
            )}
            {day}
          </div>
        ))}
      </div>
    </>
  );
};

export default Calendar;
