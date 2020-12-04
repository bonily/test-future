/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import {PersonType} from '../../types';

const PersonInfoDiv = styled.div``;

const PersonInfoText = styled.p``;

interface Props {
  person: PersonType | undefined
}

const PersonInfo: React.FunctionComponent<Props> = (props: Props) => {
  const {person} = props;
  return (
    (person === undefined) ? <></> :
      <PersonInfoDiv>
        <PersonInfoText>
        Выбран пользователь <b>{`${person.firstName} ${person.lastName}`}</b><br />
        Описание:
          <textarea value={person.description} readOnly>{person.description}</textarea><br />
        Адрес проживания: <b>{person.address.streetAddress}</b><br />
        Город: <b>{person.address.city}</b><br />
        Провинция/штат: <b>{person.address.state}</b><br />
        Индекс: <b>{person.address.zip}</b><br />
        </PersonInfoText>
      </PersonInfoDiv>
  );
};

export default PersonInfo;
