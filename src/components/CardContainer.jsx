import Engineer from '../assets/Engineer.png';  
import Doctor from '../assets/Doctor.png';
import CExam from '../assets/CExam.png';
import CourseCard from './CourseCard';

// Main CourseCards Component
export default function CardContainer() {
  const courses = [
    { title: 'NEET', image: Doctor, link: '/neet' },
    { title: 'JEE', image: Engineer, link: '/jee' },
    { title: 'Other Exams', image: CExam, link: '/foundation' },
  ];

  return (
    <div className="bg-[#14213D] w-full py-10 px-4 md:px-20 pb-[8rem]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#FCA311] mb-12">
        Let’s Fix What’s Stopping You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
}