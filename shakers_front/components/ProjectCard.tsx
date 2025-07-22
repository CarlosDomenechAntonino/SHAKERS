
import React from "react";

const CardComponent = ({
}) => {
  return (
    <section className={`card ${className}`}>
      <header className="card-header">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </header>
      <article className="card-content">{content}</article>
      <footer className="card-footer">{footer}</footer>
    </section>
  );
};

export default CardComponent;
