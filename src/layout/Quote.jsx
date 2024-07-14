import React from "react";
import language from "../language/language.json";
function Quote({ currentLanguage }) {
  const langData = language[currentLanguage];
  return (
    <section className="h-quote">
      <p>
        <img id="quote-top" src="src\assets\quote.png" />
        {langData.quote}
        <img id="quote-bottom" src="src\assets\quote.png" />
      </p>
      <p className="quote-author">- {langData.quoteAuthor}</p>
    </section>
  );
}

export default Quote;
