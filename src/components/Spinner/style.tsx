import styled from 'styled-components/native'

interface ContainerProps {
  aside: boolean
  paddingTop?: number
  paddingLeft?: number
  paddingRight?: number
  paddingBottom?: number
}

export const Container = styled.View<ContainerProps>`
  padding-top: ${(props) => props.paddingTop ?? 16}px;
  padding-left: ${(props) => props.paddingLeft ?? 0}px;
  padding-bottom: ${(props) => props.paddingBottom ?? 16}px;
  padding-right: ${(props) => props.paddingRight ?? 0}px;
  justify-content: ${(props) => (props.aside ? `flex-start` : `center`)};
  align-items: ${(props) => (props.aside ? `flex-start` : `center`)};
`
