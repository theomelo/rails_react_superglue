import React from 'react'
import { useContent } from '@thoughtbot/superglue';

export default function HomeShow() {
  const {
    body,
    footer,
  } = useContent();
  const { greet } = body;

  return (
    <>
      <h1>{ greet }</h1>
      <span>{ footer }</span>
    </>
  )
}
