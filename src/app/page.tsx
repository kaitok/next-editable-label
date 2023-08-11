import Button from './(auth)/components/Button'
import { consoleAction, getData } from './handler/consoleAction'

export default async function Home() {
  consoleAction('server component')
  let data = await getData()

  return (
    <div>
      <h1>Home</h1>
      <Button />
      {JSON.stringify(data)}

      <p>
        <a href="./client">client</a>
      </p>
    </div>
  )
}
