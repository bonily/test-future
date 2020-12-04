import React, {useState} from 'react';
/* eslint-disable no-console */
import styled from 'styled-components';

const Th = styled.th`
  padding: 5px;

  font-size: 20px;
  line-height: 24px;

  border-bottom: 1px solid #000000;

  cursor: pointer;
`;

// eslint-disable-next-line
const Img = styled.img<{isAscending: boolean}>`
  margin-left: 10px;
  margin-top: 10px;

  transform: ${({isAscending}) => isAscending ? `rotate(180deg)` : `none`};
`;

interface Props {
  title: string,
  sortType: string,
  onSortTitleClick: (sortType: string, isAscending: boolean) => void
}

const TableTitle: React.FunctionComponent<Props> = (props: Props) =>{
  const {title, sortType, onSortTitleClick} = props;
  const [isAscending, setIsAscending] = useState(false);

  return (
    <Th onClick = {() => {
      setIsAscending(!isAscending);
      onSortTitleClick(title, !isAscending);
    }}>
      {title}
      <Img src={sortType === title ? `./img/sort-icon--active.svg` : `./img/sort-icon.svg`} width='18px' height='18px' isAscending={isAscending} />
    </Th>
  );
};

export default TableTitle;
