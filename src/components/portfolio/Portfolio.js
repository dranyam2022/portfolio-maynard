import "./Portfolio.css";
import IMG1 from "../../assets/expense_tracker.png";
import IMG2 from "../../assets/food-order.png";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Expense Tracker",
      gitlab: "https://gitlab.com/dranyam123/expense-tracker",
      demo: "https://expense-tracker-phi-mauve.vercel.app/",
      description:
        "This project started as a Udemy course. Using the things I learned from the course, I enhanced and completed it.",
    },
    {
      id: 2,
      image: IMG2,
      title: "Fooder Order App",
      gitlab: "https://gitlab.com/dranyam123/food-order-frontent",
      demo: "https://food-order-frontent.vercel.app/",
      description:
        "This project started as another Udemy course. Using the things I learned from the course, I enhanced and completed it.",
    },
    {
      id: 3,
      image: IMG1,
      title: "Expense Tracker",
      gitlab: "https://gitlab.com/dranyam123/expense-tracker",
      demo: "https://expense-tracker-phi-mauve.vercel.app/",
      description:
        "This project started as a Udemy course. Using the things I learned from the course, I enhanced and completed it.",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, gitlab, demo, description }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="portfolio__item-cta">
                <a href={gitlab} className="btn" target="_blank" rel="me">
                  Gitlab
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="me"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
