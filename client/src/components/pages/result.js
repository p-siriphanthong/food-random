import React from 'react'
import styled from 'styled-components'

import Map from '../map'

const BREAK_POINT = 1024

const Wrapper = styled.div`
  display: flex;

  @media (max-width: ${BREAK_POINT}px) {
    flex-direction: column;
  }
`

const MapWrapper = styled.div`
  flex: 1;
  height: 100vh;
  position: relative;

  @media (max-width: ${BREAK_POINT}px) {
    flex: none;
    width: 100%;
    height: 500px;
    order: 1;
  }
`

const DetailsWrapper = styled.div`
  text-align: center;
  width: 450px;
  height: 100vh;
  padding: 50px 30px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media (max-width: ${BREAK_POINT}px) {
    width: 100%;
    height: auto;
  }
`

const FoodName = styled.h1`
  color: ${props => props.theme.color.primary};
  margin: 0;
`

const FoodCategory = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
`

const FoodImage = styled.img`
  max-width: 100%;
  margin: 30px 0;
  object-fit: contain;
`

const ButtonWrapper = styled.div`
  margin: auto;
`

const Button = styled.div`
  color: ${props =>
    props.border ? props.theme.color.primary : props.theme.color.dark};
  background: ${props =>
    props.border ? 'transparent' : props.theme.color.primary};
  border: 1px solid ${props => props.theme.color.primary};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  border-radius: 1000px;
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  display: inline-block;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: translateY(-6px);
  }

  @media (max-width: ${BREAK_POINT}px) {
    width: 300px;
    margin: 10px 15px;
  }
`

const ResultPage = ({ foodMenu, excludingCategories, fetchFoodMenu }) => (
  <Wrapper>
    <MapWrapper>
      <Map markers={foodMenu.restaurants} />
    </MapWrapper>
    <DetailsWrapper>
      <FoodName>{foodMenu.name}</FoodName>
      <FoodCategory>{foodMenu.category.name}</FoodCategory>
      <FoodImage src={foodMenu.image} />
      <div style={{ flex: 1 }} />
      <ButtonWrapper>
        <Button
          border
          onClick={() =>
            fetchFoodMenu([...excludingCategories, foodMenu.category.id])
          }
        >
          No {foodMenu.category.name}, please
        </Button>
        <Button onClick={() => fetchFoodMenu()}>Random Again !</Button>
      </ButtonWrapper>
    </DetailsWrapper>
  </Wrapper>
)

export default ResultPage
