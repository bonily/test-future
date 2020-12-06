import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 80%;

  margin-left: auto;
  margin-right: auto;
`;

const Ul = styled.ul`
  display: flex;
  width: 100%;

  padding: 0;

  list-style: none;
`;

// eslint-disable-next-line
const Li = styled.li<{isActive: boolean}>`
  max-width: 50px;

  flex-grow: 1;

  margin-left: auto;
  margin-right: auto;

  text-align: center;

  border: 1px solid grey;

  background: ${({isActive}) => isActive ? `yellow` : `none` };

  &:hover {
    background: lightgray;
  }
`;

const A = styled.a`
  display: block;
  width: 100%;
  height: 100%;

  text-decoration: none;
`;


interface Props {
  personsPerPage: number,
  totalPersons: number,
  currentPage: number,
  paginate: (number: number) => void
}

const Pagination: React.FunctionComponent<Props> = (props: Props) => {
  const {personsPerPage, totalPersons, currentPage, paginate} = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPersons / personsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Nav>
      <Ul>
        {pageNumbers.map((number, i) => (
          <Li key = {number} isActive = {(currentPage === i + 1)}>
            <A href='#!' onClick={() => paginate(number)}>{number}</A>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

export default Pagination;
