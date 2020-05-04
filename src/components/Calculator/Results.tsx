import React, { useState, useMemo, FC } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../store'
import styled from 'styled-components'
import { ISingleRate } from '../../store/calculator/types'
import Button from './Button'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const Header = styled.h1`
  font-weight: 800;
`

const Pagination = styled.div`
  display: inline-block;
  margin-bottom: 30px;
`

const PaginationBox = styled.button`
  font-size: 16px;
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover:not(.active) {
    background-color: #ddd;
  }
  &.active {
    background-color: #4caf50;
    color: white;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  @media (max-width: 800px) {
    grid-template-columns: auto auto;
  }
`

const ContainerBox = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 20px;
  text-align: center;
`

interface Props {
  previousPage: Function
  onSubmit: Function
}

const PER_PAGE = 20

const Results: FC<Props> = ({ previousPage, onSubmit }) => {
  const rates = useSelector((state: AppState) => state.calculator.rates)
  const values = useSelector((state: AppState) => state.form.user.values || {})
  const [page, setPage] = useState(1)

  const paginationBoxes = useMemo(() => {
    const result = []
    const minimum = (rates.length - (rates.length % PER_PAGE)) / PER_PAGE + 1
    for (let i = 1; i <= minimum; i++) {
      result.push(
        <PaginationBox
          key={i}
          className={page === i ? 'active' : ''}
          onClick={() => setPage(i)}
        >
          {i}
        </PaginationBox>
      )
    }
    return result
  }, [rates, page])

  return (
    <Wrapper>
      <Header>
        {values.number} {values.currency}
      </Header>
      <Pagination>{paginationBoxes}</Pagination>
      <Container>
        {rates
          .slice((page - 1) * PER_PAGE, page * PER_PAGE)
          .map((rate: ISingleRate) => (
            <ContainerBox key={rate.label}>
              <b>{(rate.value * values.number).toFixed(1)}</b> {rate.label}
            </ContainerBox>
          ))}
      </Container>
      <Button onClick={previousPage}>Go back</Button>
      <Button onClick={onSubmit}>Create error</Button>
    </Wrapper>
  )
}

export default Results
