import {StyledContainer} from './styles/Container.styles'
const Container = (props) => {
  return <StyledContainer class="container">{props.children}</StyledContainer>;
};
export default Container;
