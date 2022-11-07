import {StyledContainer} from './styles/Container.styles'
const Container = (props) => {
  return <StyledContainer className="container">{props.children}</StyledContainer>;
};
export default Container;
