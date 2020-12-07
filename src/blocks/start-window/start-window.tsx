import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {DATA_SIZE} from '../../const';

const ModalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;

  padding: 10%;

  box-shadow: 5px 20px 50px rgba(16, 112, 177, 0.2);
  border-radius: 10px;
  box-sizing: border-box;
`;

const DataSizeButton = styled.button`
  padding: 10px;
`;

const LoadDiv = styled.div`
  width: 100%;
`;

const LoadText = styled.p`
  width: 100%;
  text-align: center;

  font-size: 16px;
  font-weight: bold;
`;

const animationStatus = keyframes`
  from {
    background: #ffffff 100%;
  }
  25% {
    background: linear-gradient(to left, #ffffff 75%, blueviolet);
  }
  50% {
    background: linear-gradient(to left, #ffffff 50%, blueviolet);
  }
  75% {
    background: linear-gradient(to left, #ffffff 25%, blueviolet);
  }
  to {
    background: blueviolet 100%;
  }
`;

const StatusDiv = styled.div`
  width: 100%;
  height: 5px;

  border-radius: 3px;

  animation: 5s ${animationStatus} ease-in-out infinite;
`;


interface Props {
  error: string | number,
  onDataSizeButtonClick: (sizeType: string) => void,
  setError: (error: string) => void
}

const StartWindow: React.FunctionComponent<Props> = (props: Props) => {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const {error, onDataSizeButtonClick, setError} = props;

  useEffect(() => {
    const timer = setInterval(() => {
      setError(``);
      setLoadingStatus(false);
    }, 8000);
    return () => {
      window.clearInterval(timer);
    };
  }, [error]);


  return (
    <ModalDiv>
      {loadingStatus ?
        <LoadDiv>
          {error ?
            <LoadText>Что-то пошло не так :( Текст ошибки {error}</LoadText> :
            <><LoadText>
              Загрузка
            </LoadText>
            <StatusDiv /></>
          }
        </LoadDiv> :
        <>
          <DataSizeButton onClick=
            {() => {
              onDataSizeButtonClick(DATA_SIZE.ALL);
              setLoadingStatus(true);
            }}>
            Полный список</DataSizeButton>
          <DataSizeButton onClick=
            {() => {
              onDataSizeButtonClick(DATA_SIZE.SMALL);
              setLoadingStatus(true);
            }}>
            Короткий список</DataSizeButton>
        </>
      }
    </ModalDiv>
  );
};

export default StartWindow;
