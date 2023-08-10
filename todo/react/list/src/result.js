
function Result({ list }) {
  return (
    <ul className="results">
    { list.map(l => <li>{l.value}</li>) }
    </ul>
  );
}

export default Result;
