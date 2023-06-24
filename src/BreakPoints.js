import { css } from 'styled-components'

const size = {
    small: 400,
    med: 960,
    large: 1140
}

export const under = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
  @media (max-width: ${size[label]}px) {
   ${css(...args)}
  }
  `
    return acc;
}, {})