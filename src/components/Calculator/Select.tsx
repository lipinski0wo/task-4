import React, { FC } from 'react'
import styled from 'styled-components'

const Label = styled.label`
  padding-right: 10px;
  width: 65px;
  display: inline-block;
`

const Select = styled.select`
  padding: 5px 0;
`

const Wrapper = styled.div`
  padding: 5px 0;
`

const Info = styled.p`
  padding: 5px 0;
  margin: 0;
  font-size: 12px;
  color: #f00;
`

interface ISelectProps {
  label: String
  disabled: boolean
  placeHolder: string
  datas: {
    value: string
    label: string
  }[]
  [key: string]: any
}

const SelectInput: FC<ISelectProps> = (field: ISelectProps) => (
  <Wrapper>
    <Label>{field.label}</Label>
    <Select {...field.input} disabled={field.disabled} className='form-control'>
      <option value='' disabled={true}>
        {field.placeHolder}
      </option>
      {field.datas.map((data: any, i: number) => {
        return (
          <option key={i} value={data.value}>
            {data.label}
          </option>
        )
      })}
    </Select>
    {field.meta.touched && field.meta.error && <Info>{field.meta.error}</Info>}
  </Wrapper>
)

export default SelectInput
