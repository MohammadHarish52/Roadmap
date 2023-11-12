import "./App.css";
import Messege from "./components/Messege";
import Navbar from "./components/Navbar";
import Topics from "./components/Topics";

function App() {
  const webDevelopmentTopics = [
    {
      title: "HTML",
      description:
        "HTML (Hypertext Markup Language) is the standard markup language for creating the structure of web pages. Learn the essential tags and elements to create well-organized and semantically meaningful content.",
      resourceLink: "https://www.youtube.com/watch?v=UB1O30fR-EE",
    },
    {
      title: "CSS",
      description:
        "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. Dive into styling techniques, selectors, and layouts to make your web pages visually appealing and responsive.",
      resourceLink: "https://www.youtube.com/watch?v=yfoY53QXEnI",
    },
    {
      title: "Vanilla JavaScript",
      description:
        "Vanilla JavaScript refers to plain JavaScript without the use of any additional libraries or frameworks. Explore the core concepts of JavaScript, including variables, functions, and control flow, to add interactivity to your web pages.",
      resourceLink: "https://www.youtube.com/watch?v=XIOLqoPHCJ4",
    },
    {
      title: "ES6 (JavaScript)",
      description:
        "ECMAScript 2015 (ES6) introduced several new features and enhancements to JavaScript. Learn about arrow functions, destructuring, classes, and other modern JavaScript syntax to write more concise and readable code.",
      resourceLink: "https://www.youtube.com/watch?v=NCwa_xi0Uuc",
    },
    {
      title: "Frontend Development with React.js & Redux",
      description:
        "React.js is a JavaScript library for building user interfaces, and Redux is a predictable state container. Combine these technologies to create modular and scalable frontend applications with efficient state management.",
      resourceLink:
        "https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3",
    },
    {
      title: "Backend Development with MongoDB, Node.js & Express.js",
      description:
        "MongoDB is a NoSQL database, Node.js is a JavaScript runtime, and Express.js is a web application framework. Learn to build powerful server-side applications by integrating these technologies.",
      resourceLink:
        "https://www.youtube.com/watch?v=k_0ZzvHbNBQ&list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp",
    },
    {
      title: "Full Stack Project",
      description:
        "Combine frontend and backend skills to work on a comprehensive full-stack project. Apply your knowledge to create a real-world application that integrates various technologies and showcases your capabilities as a full-stack developer.",
      resourceLink:
        "https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu",
    },
    {
      title: "Object-Oriented Programming (OOP)",
      description:
        "Object-Oriented Programming is a programming paradigm that uses objects and classes to structure code. Gain an understanding of OOP principles, including encapsulation, inheritance, and polymorphism.",
      resourceLink:
        "https://www.youtube.com/watch?v=Iuo9PpGE04Y&list=PLJlvvQaOMyQ0x2fRSHNg6kbL31QafqkHM",
    },
    {
      title: "Operating Systems (OS)",
      description:
        "Operating Systems serve as a bridge between hardware and software, providing essential services to run computer programs. Explore the core concepts of OS, including processes, memory management, and file systems.",
      resourceLink:
        "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
    },
    {
      title: "Database Management Systems (DBMS)",
      description:
        "Database Management Systems handle the storage, retrieval, and management of data in databases. Learn about different types of databases, data models, and SQL to effectively organize and query data.",
      resourceLink:
        "https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y",
    },
  ];

  return (
    <>
      <div className="flex flex-col bg-stone-950 ">
        <Navbar />
        <Messege />
        <Topics topics={webDevelopmentTopics} />
      </div>
    </>
  );
}

export default App;
