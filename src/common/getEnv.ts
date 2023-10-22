import { config } from 'dotenv'

function getValues() {
  const { error, parsed } = config()
  if (error) {
    return process.env
  }
  if (!parsed) {
    return process.env
  }
  return { ...process.env, ...parsed }
}

const values = getValues()

export function getEnv(key: string) {
  return values[key]
}
