import myMessMeal from "../../images/my-mess-meal.png";
import comparisonSortingAlgorithm from "../../images/comparison-sorting-algorithm.png";
import quiz from "../../images/quiz.png";
import bookStore from "../../images/book-store.png";
import todoListReduxToolkit from "../../images/todo-list-redux-toolkit.png";
import contactCard from "../../images/contact-card.png";
import learningApp from "../../images/learning-app.png";

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
    name: "Learning App",
    image: learningApp,
    description:
      "Self-learning web application platform with various videos and articles of different subjects.",
    technologiesUsed: [
      "React",
      "Firebase",
      "React Router",
      "Redux-toolkit",
      "HTML5",
      "CSS3",
      "ES6",
    ],
    deploymentLink: "https://learning-tutorial-app.netlify.app/",
    sourceCode: "https://github.com/s4shreya/abc-learning-app",
  },
  {
    no: 3,
    name: "Book Store",
    image: bookStore,
    description:
      "MERN Stack book store application to add, edit, remove and view books using CRUD operations.",
    technologiesUsed: [
      "MERN Stack",
      "React",
      "Express.js",
      "Node.js",
      "axios",
      "Mongoose",
      "JS",
    ],
    deploymentLink: "https://fac-book-store-frontend.vercel.app/",
    sourceCode: "https://github.com/s4shreya/fac-book-store",
  },
  {
    no: 4,
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
    no: 5,
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
    no: 6,
    name: "Todo List",
    image: todoListReduxToolkit,
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
    deploymentLink: "https://todo-list-redux-toolkit.netlify.app/",
    sourceCode: "https://github.com/s4shreya/spp-redux-toolkit",
  },
  {
    no: 7,
    name: "Contact Card",
    image: contactCard,
    description: "A simple contact card to create a post.",
    technologiesUsed: [
      "React",
      "React Router",
      "HTML5",
      "CSS3",
      "JavaScript",
      "ES6",
    ],
    deploymentLink: "https://github.com/s4shreya/fac-contact-card",
    sourceCode: "https://github.com/s4shreya/fac-contact-card",
  },
];

export default ProjectList;
