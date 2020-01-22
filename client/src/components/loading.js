import React from 'react'
import styled, { keyframes } from 'styled-components'

const ripple = keyframes`
  from {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  to {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => (props.isLoading ? 99 : -1)};
  opacity: ${props => (props.isLoading ? 1 : 0)};
  transition: ${props => (props.isLoading ? 'none' : 'all 1s ease-in-out')};
`

const Ripple = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    border: 4px solid ${props => props.theme.color.primary};
    opacity: 1;
    border-radius: 50%;
    animation: ${ripple} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & div:nth-child(2) {
    animation-delay: -0.5s;
  }
`

const LoadingComponent = ({ isLoading }) => {
  return (
    <Wrapper isLoading={isLoading}>
      <Ripple>
        <div></div>
        <div></div>
      </Ripple>
    </Wrapper>
  )
}

export default LoadingComponent
