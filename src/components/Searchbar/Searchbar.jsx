import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export default function Searchbar (props) {
  const submitHandler = event => {
    event.preventDefault();
    const query = event.currentTarget[1].value;
    props.queryHandler(query);
  };

  
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={submitHandler}>
          <button type="submit" className={css['SearchForm-button']}>
            <span className={css['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={css['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }

Searchbar.propTypes = {
  queryHandler: PropTypes.func,
};
