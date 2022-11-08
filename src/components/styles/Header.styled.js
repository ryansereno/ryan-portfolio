import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-family: Nunito, sans-serif;
    font-variation-settings: "wght" 710;
    font-size: 3em;
    display: inline-block;
  }
  .button-container{
  display: flex;
    align-items: center;
  }
@media (max-width: 600px) {
.social-icon{
display:none;
}}
  .switch {
    position: relative;
    display: inline-block;
    width: 3.2rem;
    height: 1.5rem;
  }
  .switch__input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .switch__slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--light-blue);
    border-radius: 1em;
    transition: background 0.2s;
    cursor: pointer;
  }
  .switch__slider::before {
    content: "";
    position: absolute;
    left: 0.2em;
    top: 50%;
    transform: translateY(-50%);
    height: 1em;
    width: 1em;
    border-radius: 1.6em;
    background: white;
    transition: transform 0.2s, width 0.2s, background 0.2s;
  }
  .switch__input:checked + .switch__slider {
    background: var(--yellow);
  }
  .switch__input:not(:checked):active + .switch__slider::before {
    width: 2.4em;
  }
  .switch__input:checked:active + .switch__slider::before {
    transform: translate(1rem, -50%);
    width: 2.4em;
  }
  .switch__input:checked + .switch__slider::before {
    transform: translate(1.8em, -50%);
  }
`;
