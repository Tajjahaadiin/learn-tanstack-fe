import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
import { BriefcaseBusiness } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

const CreatePdf = () => {
  const generatePdf = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf")!);
    if (!data || data == null) {
      throw new Error("pdf not found");
    }
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`test_cv.pdf`);
  };
  return (
    <div>
      <div
        id="pdf"
        className="max-w-3xl mx-auto my-10 bg-white text-gray-800 font-sans p-8 shadow-md rounded-lg"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Tajjuddiin Auliya Ahaadiin</h1>
          <p className="text-lg text-gray-600">Fullstack Developer</p>
          <div className="mt-2 text-sm text-gray-500 space-y-1">
            <p className="flex gap-2 justify-center">
              <BriefcaseBusiness /> <span>South Tangerang, Indonesia</span>
            </p>
            <p className="flex gap-2 justify-center">
              <FaWhatsapp className="size-5" />

              <span> +62 878 6160 4875</span>
            </p>
            <p>
              ✉️{" "}
              <a href="mailto:tajjuddiinauliya@gmail.com" className="underline">
                tajjuddiinauliya@gmail.com
              </a>
            </p>
            <p>
              🔗{" "}
              <a href="https://github.com/Tajjahaadiin" className="underline">
                GitHub
              </a>{" "}
              |
              <a
                href="https://www.linkedin.com/in/tajjahaadiin/"
                className="underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="flex items-center gap-2 text-xl font-semibold border-b pb-1 mb-2 bg-neutral-300">
            <MdPeopleAlt className="size-5" />
            <span>Summary</span>
          </h2>
          <p>
            Fullstack web developer building and launching applications from
            start to finish. Experienced 1+ year in React.js, TypeScript,
            Express.js, Tailwind CSS, and PostgreSQL. Passionate about solving
            problems and learning new technologies. Focused on creating complete
            and performant software solutions for businesses.
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">
            Technical Skills
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Programming:</strong> Node.js, PHP, JavaScript, HTML, CSS,
              Unity, C#
            </li>
            <li>
              <strong>Web Technology:</strong> Express.js, Next.js, Laravel,
              React
            </li>
            <li>
              <strong>DBMS/ORM:</strong> PostgreSQL, MySQL, Prisma, Drizzle,
              Sequelize
            </li>
            <li>
              <strong>API:</strong> REST API
            </li>
            <li>
              <strong>Version Control:</strong> Git
            </li>
            <li>
              <strong>Styling:</strong> Tailwind, Shadcn, ChakraUI
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">
            Work Experience
          </h2>
          <div className="mb-4">
            <h3 className="font-semibold">
              Junior Unity Developer – NICKY STUDIO
            </h3>
            <p className="text-sm text-gray-500">August 2021 - January 2023</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>Developed and managed 3D behavior in Unity</li>
              <li>Integrated Unity and web environments using WebGL</li>
              <li>Built dynamic I/O infrastructure for 3D interactions</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">
              Web Developer Intern – PUTRA WINATA
            </h3>
            <p className="text-sm text-gray-500">June 2020 - November 2020</p>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>
                Developed landing page using HTML, CSS, JavaScript, and
                Bootstrap
              </li>
              <li>Handled front-end tasks</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2">
            Education
          </h2>
          <div className="mb-3">
            <h3 className="font-semibold">Dumbways Indonesia Bootcamp</h3>
            <p className="text-sm text-gray-500">January 2025 - May 2025</p>
            <p>
              Learned to build full-stack apps using React, Next.js, TypeScript,
              Prisma, Drizzle, Express.js. Focused on best practices, API
              creation, authentication, database ops, and deployment.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Malang University (UM)</h3>
            <p className="text-sm text-gray-500">
              Bachelor’s in Educational Informatics Engineering
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-20">
        <button
          onClick={generatePdf}
          className="rounded-2xl bg-green-300 p-2 cursor-pointer"
        >
          {" "}
          Generate PDF
        </button>
      </div>
    </div>
  );
};
export default CreatePdf;
