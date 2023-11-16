import './randomQuote.css';
import { useState, useEffect } from 'react';
import { GrUpdate } from 'react-icons/gr';
import { FaWhatsapp } from 'react-icons/fa';

export default function RandomQuote() {
  const [quote, setQuote] = useState({
    text: 'The life goes on',
    author: 'Jacqueline',
  });

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    async function loadQuotes() {
      const response = await fetch('https://type.fit/api/quotes');
      const data = await response.json();
      setQuotes(data);
    }

    loadQuotes();
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  const random = () => {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(selectedQuote);
  };

  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">{quote.author}</div>
          <div className="icons">
            <GrUpdate onClick={() => random()} />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
}

