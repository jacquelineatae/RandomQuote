import { useState, useEffect } from 'react';
import RandomQuoteButton from './buttom';
import ShareButton from './shareButtom';

function RandomQuote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [shareLink, setShareLink] = useState({ text: '', url: '' });

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);

        const newShareLink = {
          text: `${data.content} - ${data.author}`,
          url: `${window.location.origin}?quote=${encodeURIComponent(data.content)}&author=${encodeURIComponent(data.author)}`
        };
        
        setShareLink(newShareLink);
      })
      .catch(error => console.error('Erro ao buscar citação:', error));
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h2>Citação Aleatória</h2>
      <blockquote>
        <p>{quote}</p>
        <footer>- {author}</footer>
      </blockquote>
      <RandomQuoteButton onClick={fetchQuote} />
      <ShareButton shareLink={shareLink} />
    </div>
  );
}

export default RandomQuote;
