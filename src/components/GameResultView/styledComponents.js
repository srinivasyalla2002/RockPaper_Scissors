import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`

export const GameButton = styled.button`
  width: 220px;
  height: 220px;
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 576px) {
    width: 120px;
    height: 120px;
    margin-top: 0px;
    margin-right: 0px;
  }
`

export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  width: 40%;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`
export const ResultName = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 12px;
  }
`

export const ResultText = styled.p`
  color: #ffffff;
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ResultButton = styled.button`
  width: 120px;
  height: 30px;
  padding: 10px;
  color: #223a5f;
  font-size: 12px;
  font-family: 'Bree Serif';
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-style: none;
  outline: none;
  cursor: pointer;
`
