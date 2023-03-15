import React from 'react'
import { useReadLocalStorage } from 'usehooks-ts'
import '../../index.css'
import { Button, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import type { playerCharacter } from '../../types/playerCharacter'
import CharacterCard from '../../components/CharacterCard'

function ListCharacter() {
  const playerCharacters = useReadLocalStorage('playerCharacters')
  const pc =
    typeof playerCharacters === 'string' ? JSON.parse(playerCharacters) : []
  return (
    <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
      <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        <Typography variant="h2" color="deep-purple">
          Number of Characters: {pc.length}
        </Typography>
        <Button
          variant="outlined"
          size="md"
          color="deep-purple"
          className="ml-5"
        >
          <Link to="/create-character">Create Character</Link>
        </Button>
      </div>
      <div className="items-center w-full pt-10 p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
        {pc.length > 0 &&
          pc.map((c: playerCharacter) => (
            <CharacterCard key={c.name} character={c} />
          ))}
      </div>
    </div>
  )
}

export default ListCharacter
