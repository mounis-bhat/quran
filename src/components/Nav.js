import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <h1>Al Qur'an</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Surah List
        <FontAwesomeIcon icon={faList} />
      </button>
    </nav>
  );
};

export default Nav;
