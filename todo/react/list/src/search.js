
function Search({ onSearch }) {
  return (
    <div className="search">
        <input
            type="text"
            className="search-input"
            onChange={onSearch}
        />
    </div>
  );
}

export default Search;
