import React, { SFC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCurrencies, getRates, getBad } from '../../store/calculator/actions'
import { InjectedFormProps } from 'redux-form'
import styled from 'styled-components'
import Results from './Results'
import CurrencyForm from './CurrencyForm'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto 0 auto;
`

const Calculator: SFC<InjectedFormProps> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCurrencies())
  }, [dispatch])

  const onSubmit = () => {
    dispatch(getBad())
  }

  const [page, setPage] = useState(0)

  const nextPage = (val: any) => {
    dispatch(getRates(val.currency))
    setPage(page + 1)
  }

  const previousPage = () => {
    setPage(page - 1)
  }

  return (
    <Wrapper>
      {page === 0 && <CurrencyForm onSubmit={nextPage} />}
      {page === 1 && (
        <Results previousPage={previousPage} onSubmit={onSubmit} />
      )}
    </Wrapper>
  )
}

export default Calculator
