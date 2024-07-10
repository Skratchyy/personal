import React from "react";

function Quote() {
  return (
    <section className="h-quote">
      <p>
        <img id="quote-top" src="/quote.png" />
        With great power comes great electricity bill
        <img id="quote-bottom" src="/quote.png" />
      </p>
      <p className="quote-author">- Dr. Who</p>
    </section>
  );
}

export default Quote;
