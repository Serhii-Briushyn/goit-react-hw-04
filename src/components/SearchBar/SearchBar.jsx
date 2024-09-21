import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { useRef } from "react";
import { ImSearch } from "react-icons/im";

function SearchBar({ onSubmit }) {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = inputRef.current.value.trim();

    if (searchTerm === "") {
      toast.error("Please enter a search term");
      return;
    }

    onSubmit(searchTerm);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          ref={inputRef}
        />
        <button className={styles.button} type="submit">
          <ImSearch className={styles.icon} />
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
