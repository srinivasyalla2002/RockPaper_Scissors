import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  width: 100%;
  border: 2px solid #ffffff;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 2%;
`

export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreName = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Bree Serif';
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`

export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: white;
  width: 15%;
  min-width: 150px;
  height: 100%;
  border-radius: 10px;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 25%;
    min-width: 75px;
  }
`

export const ScoreHeading = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 0px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`

export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 42px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 0px;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
