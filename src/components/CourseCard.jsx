function CourseCard({ title, image, link }) {
  return (
    <div className="bg-[#1B263B] text-white p-6 rounded-2xl shadow-lg shadow-slate-500 hover:scale-[1.03] transition-transform duration-300">
      {/* Title */}
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>

      {/* Image */}
      <div className="relative h-32 flex items-center justify-center mb-6">
        <div className="absolute w-28 h-28 bg-[#edf2fe] rounded-full z-0" />
        <img src={image} alt={title} className="relative z-10 h-24 object-contain" />
      </div>

      {/* Buttons or View Courses link */}
      <div className="flex justify-center gap-5 mb-4">
        {title === 'Other Exams' ? (
          <a
            href={link}
            className="border-[1px] bg-[#FCA311] border-white text-sm font-semibold text-[#14213D] hover:bg-white hover:text-red-500 hover:scale-[1.08] hover:font-bold py-2 px-6 rounded-3xl shadow transition"
          >
            View Courses
          </a>
        ) : (
          ['Class 11', 'Class 12', 'Dropper'].map((label) => (
            <button
              key={label}
              className="border-[1px] bg-[#FCA311] border-white text-sm font-semibold text-[#14213D] hover:bg-white hover:text-red-500 hover:scale-[1.08] hover:font-bold py-2 px-4 rounded-3xl shadow transition"
            >
              {label}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseCard;
