/* eslint-disable no-console */
import React, {useState} from 'react';
import styled from 'styled-components';
import {SORT_TYPES} from '../../const';
import PersonForm, {Values} from '../person-form/person-form';

const Form = styled.form`
  display: flex;

  padding: 10px;
`;

const Input = styled.input`
  width: 100%;
`;

const Button = styled.button`
  width: 100px;

  margin-left: 15px;
`;

interface Props {
  onInputChange: (str: string) => void,
  onAddNewPersonButtonClick: (value : Values) => void
}


const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {onInputChange, onAddNewPersonButtonClick} = props;
  const [isInputFormActive, setInputFormActive] = useState(false);

  const titles = Object.values(SORT_TYPES);
  console.log(titles);

  const [inputValue, setInputValue] = useState(``);
  return (
    <> <Form>
      <Input type='text' placeholder = {`Поиск`} onChange={(evt) => setInputValue(evt.target.value)}></Input>
      <Button type = 'submit' onClick={(evt) => {
        evt.preventDefault();
        onInputChange(inputValue);
      }}>Найти</Button>
      <Button type='button' onClick={() => setInputFormActive(true)}>Добавить</Button>
    </Form>
    {isInputFormActive &&
    <PersonForm
      onAddNewPersonButtonClick = {onAddNewPersonButtonClick}
      setInputFormActive = {setInputFormActive}
    />}
    </>
  );
};

export default Header;
