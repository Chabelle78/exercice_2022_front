import styledComponents from "styled-components";
const NavbarStyled = styledComponents.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`;

export default function Navbar() {

  return (
    <>
      <NavbarStyled>
        <p>Wilders Book</p>
      </NavbarStyled>
    </>
  );
}
