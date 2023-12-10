'use client'

import { useState } from 'react'
import { Button } from '..'

type GreetingContainerProps = {
  text: string
}

function Greating({ text }: GreetingContainerProps) {
  return <p>{text}</p>
}

const GreatingContainer = () => {
  const [TextSeen, setTextSeen] = useState('Hello World')

  const changeText = () => {
    setTextSeen('Bye World')
  }
  return (
    <div>
      <Greating text={TextSeen} />
      <Button onclick={changeText} disable={false}>
        Change Text
      </Button>
    </div>
  )
}

export default GreatingContainer
