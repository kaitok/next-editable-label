'use server'

export async function consoleAction(from: string) {
  console.log('server action from: '+ from)
}

export async function getData() {
  return {data: 1}
}