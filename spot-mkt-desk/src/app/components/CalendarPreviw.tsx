function CalendarPreview() {
    return (
      <div className="bg-white p-4 rounded shadow w-full">
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Calendário de Ações</h3>
        
        <div className="grid grid-cols-7 gap-1 text-[10px] sm:text-xs md:text-sm text-center text-gray-600">
          {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
  
          {Array.from({ length: 30 }, (_, i) => (
            <span
              key={i}
              className={`py-1 rounded transition-all ${
                i === 10 || i === 16
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>
    );
  }
  
  export default CalendarPreview;
  