import Navbar from "../components/Navbar"; // Adjust path if needed

export default function Notes() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#14213D] flex flex-col items-center justify-center text-white pt-[6rem] pb-[6rem]">
        <div className="bg-[#ededed] text-[#14213D] rounded-xl shadow-lg p-10 max-w-2xl w-full text-center mx-4">
          <h1 className="text-4xl font-extrabold text-[#FCA311] mb-4 animate-bounce">
            📘 Docengo Notes
          </h1>
          <p className="text-lg font-medium mb-6">
            Access high-quality curated notes for JEE, NEET, and more.
          </p>
          <p className="text-sm text-gray-600 italic mb-8">
            We're currently uploading the best content for your success. Please check back soon!
          </p>
          <div className="flex justify-center">
            <span className="bg-[#FCA311] text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-[#e49f12] transition">
              📄 Notes Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
