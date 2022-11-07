const MainTitle = (props) => {
  let multiColorTitle = [];
  for (let letter of "Frontend") {
    multiColorTitle.push(
      <span key={letter} className="header-letter">
        {letter}
      </span>
    );
  }

  return (
    <div className="main-title">
      <h2>
        {multiColorTitle}&nbsp;
        <br />
        Engineer
      </h2>
    </div>
  );
};

export default MainTitle;
