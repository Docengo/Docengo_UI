import { Link } from 'react-router-dom';

function CourseCard({ title, image }) {
  // Determine route based on title
  let route = '';
  if (title === 'NEET Courses') route = '/neet-batches';
  else if (title === 'JEE Courses') route = '/jee-batches';
  else if (title === 'Other Exams') route = '/other-exams';

  return (
    <div className="bg-[#131827] text-white p-6 rounded-2xl shadow-lg shadow-slate-500 hover:scale-[1.03] transition-transform duration-300">
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
          <Link
            to={route}
            className="border-[1px] bg-[#FCA311] border-white text-sm font-semibold text-[#14213D] hover:bg-white hover:text-red-500 hover:scale-[1.08] hover:font-bold py-2 px-6 rounded-3xl shadow transition"
          >
            More Courses
          </Link>
        ) : (
          <Link to={route}>
            <button
              className="group text-[#FCA311] text-md font-semibold hover:scale-[1.08] hover:font-bold py-2 px-4 rounded-3xl shadow transition"
            >
              <span className="underline underline-offset-2 hover:text-red-600">Explore Batches</span>{" "}
              <span className="text-[#FCA311] text-lg font-semibold no-underline group-hover:text-red-600 transition">
                →
              </span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
