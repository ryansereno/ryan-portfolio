import styled from "styled-components";
const StyledAbout = styled.div`
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: center;
  max-width: 700px;
  margin: auto;
  margin-bottom: 100px;

  img {
    vertical-align: middle;
    border-radius: 5px;
    height:30px;
  }
  img:nth-of-type(1){
  border: 2px solid #1595d3;
  }
  @media (max-width: 870px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export default StyledAbout;
