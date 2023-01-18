import styled from 'styled-components';

export const ButtonList =styled.div`
display: flex;
justify-content: center;
gap:10px;
`

export const Button = styled.button`
background-color: #F5F5F5;
border: 0;
border-radius: .5rem;
box-sizing: border-box;
color: #008B8B;
font-family: "Roboto",sans-serif;
font-size: .875rem;
font-weight: 500;
line-height: 1.25rem;
padding: .5rem 1rem;
text-align: center;
text-decoration: none ;
text-decoration-thickness: auto;
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
cursor: pointer;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
&:hover {
  background-color: #FFFAF0;
}
&:focus-visible {
  box-shadow: none;
}
&:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
`;

