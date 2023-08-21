import styled from "styled-components"
const StyledTitle = styled.div`
  height: 101vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

h2 {
  margin: auto;
  font-size: 8rem;
  font-family: Nunito, sans-serif;
  font-variation-settings: "wght" 710;
  line-height: 0.8em;
}

.text-span {
  font-size: 0.8rem;
}
.header-letter {
  font-family: Pacifico;
}

.header-letter:nth-child(1) {
  color: var(--pink);
}
.header-letter:nth-child(2) {
  color: var(--teal);
}
.header-letter:nth-child(3) {
  color: var(--red);
}
.header-letter:nth-child(4) {
  color: var(--yellow);
}
.header-letter:nth-child(5) {
  color: var(--light-green);
}
.header-letter:nth-child(6) {
  color: var(--light-blue);
}
.header-letter:nth-child(7) {
  color: var(--pink);
}
.header-letter:nth-child(8) {
  color: var(--teal);
}
.header-letter:nth-child(9) {
  color: var(--yellow);
}
@media (max-width: 640px) {
  h2 {
    font-size: 4rem;
  }
}
`
export default StyledTitle
