import PropTypes from 'prop-types';

function ShareButton({ shareLink }) {
  const handleShareButtonClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Compartilhar Citação',
        text: shareLink.text,
        url: shareLink.url
      })
      .then(() => console.log('Citação compartilhada com sucesso'))
      .catch((error) => console.error('Erro ao compartilhar citação:', error));
    }
  }

  return (
    <button onClick={handleShareButtonClick}>
      Compartilhar Citação
    </button>
  );
}

ShareButton.propTypes = {
  shareLink: PropTypes.shape({
    text: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
};

export default ShareButton;

