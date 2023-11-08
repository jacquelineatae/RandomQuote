import PropTypes from 'prop-types';

function RandomQuoteButton({ onClick }) {
  return (
    <button onClick={onClick}>
      Nova Citação
    </button>
  );
}

RandomQuoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RandomQuoteButton;
