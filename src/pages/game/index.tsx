import { google } from 'googleapis'

type Query = {
  id: string
}
type GetServerSideProps = {
  query: Query
}
type GameProps = {
  round: number
  player1: number
  player2: number
}

// Generating our props server-side
export async function getServerSideProps({ query }: GetServerSideProps) {
  // Authenticating to Google
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  })
  const sheets = google.sheets({ version: 'v4', auth })

  // Use ID to get the right row's data
  const { id } = query
  const range = `game-1!A${id}:C${id}`

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GSHEETS_FILE_ID,
    range,
  })

  const { values: values } = response.data

  const [round, player1, player2] = values ? values[0] : [null, null, null]

  return {
    props: {
      round,
      player1,
      player2,
    },
  }
}

export default function Game({ round, player1, player2 }: GameProps) {
  return (
    <div>
      <h1>Round #{round}</h1>

      <ul>
        <li>Player 1: {player1}</li>
        <li>Player 2: {player2}</li>
      </ul>
    </div>
  )
}
