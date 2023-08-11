'use client'
import Button from '../(auth)/components/Button'
import { consoleAction, getData } from '../handler/consoleAction'
import { useEffect, useState } from 'react'

export default function Client() {
  const [data, setData] = useState({})

  useEffect(() => {
    consoleAction('client component')
  }, [])

  getData()
    .then((data) => {
      setData(data)
    })
    .catch((error) => {
      console.log('error get data: ', error)
    })

  return (
    <div>
      <h1>Client page</h1>
      <Button />
      {JSON.stringify(data)}
      Hello
    </div>
  )
}
