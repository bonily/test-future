import React, {useState} from 'react';
import styled from 'styled-components';
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

  const [inputValue, setInputValue] = useState(``);
  return (
    <> <Form>
      <Input type='text' placeholder = {`Поиск`} onChange={(evt) => setInputValue(evt.target.value)}></Input>
      <Button type='submit' name='find-button' onClick={(evt) => {
        evt.preventDefault();
        onInputChange(inputValue);
      }}>Найти</Button>
      <Button type='button' id='new-person' onClick={() => setInputFormActive(true)}>Добавить</Button>
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
