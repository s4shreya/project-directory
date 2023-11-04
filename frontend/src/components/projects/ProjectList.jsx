import myMessMeal from "../../images/my-mess-meal.png";
import comparisonSortingAlgorithm from "../../images/comparison-sorting-algorithm.png";
import quiz from "../../images/quiz.png";

const ProjectList = [
  {
    no: 1,
    name: "My Mess Meal",
    image: myMessMeal,
    description:
      "A web application that helps in keeping track of the students who are going to eat an upcoming meal in the mess and cook food accordingly.",
    technologiesUsed: [
      "React",
      "Firebase",
      "React Router",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "ES6",
      "JS",
    ],
    deploymentLink: "https://my-mess-meal.netlify.app/",
    sourceCode: "https://github.com/s4shreya/my-mess-meal",
  },
  {
    no: 2,
    name: "Book Store",
    image: "",
    description:
      "MERN Stack book store application to add, edit, remove and view books using CRUD operations.",
    technologiesUsed: [
      "MERN Stack",
      "React",
      "Express.js",
      "Node.js",
      "axios",
      "Mongoose",
      "JS"
    ],
    deploymentLink: "",
    sourceCode: "https://github.com/s4shreya/fac-book-store",
  },
  {
    no: 3,
    name: "Sorting Algorithms",
    image: comparisonSortingAlgorithm,
    description:
      "Compares different sorting algorithms by representing a bar graph from a randomly generated array.",
    technologiesUsed: [
      "HTML5",
      "CSS3",
      "Vanilla JavaScript",
      "Sorting algorithms",
      "Bar graph",
    ],
    deploymentLink: "https://comparison-sorting-algorithm.netlify.app/",
    sourceCode: "https://github.com/s4shreya/abc-comparison-sorting-algorithms",
  },
  {
    no: 4,
    name: "Excel Quiz",
    image: quiz,
    description:
      "A time-based quiz web application that allows user to attempt and get result based on their performance. Also, it auto-submits after 1 minute.",
    technologiesUsed: [
      "React",
      "Context API",
      "React Router",
      "HTML5",
      "CSS3",
      "JavaScript",
      "ES6",
    ],
    deploymentLink: "https://excel-quiz.netlify.app/",
    sourceCode: "https://github.com/s4shreya/abc-quiz",
  },
  {
    no: 5,
    name: "Todo List",
    image: "",
    description:
      "A simple todo list using redux-toolkit to create and add a task in the list.",
    technologiesUsed: [
      "React",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "JavaScript",
      "ES6",
    ],
    deploymentLink: "",
    sourceCode: "https://github.com/s4shreya/spp-redux-toolkit",
  },
  {
    no: 6,
    name: "Contact Card",
    image: "",
    description: "A simple contact card to create a post.",
    technologiesUsed: [
      "React",
      "React Router",
      "HTML5",
      "CSS3",
      "JavaScript",
      "ES6",
    ],
    deploymentLink: "",
    sourceCode: "https://github.com/s4shreya/fac-contact-card",
  },
];

export default ProjectList;
