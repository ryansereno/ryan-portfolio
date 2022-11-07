import StyledTitle from './styles/Title.styled'
const MainTitle = (props) => {
  let multiColorTitle = [];
  for (let letter of "Frontend") {
    multiColorTitle.push(
      <span key={letter + Math.random()} className="header-letter">
        {letter}
      </span>
    );
  }

  return (
    <StyledTitle >
      <h2>
        {multiColorTitle}&nbsp;
        <br />
        Engineer
      </h2>
    </StyledTitle>
  );
};

export default MainTitle;
