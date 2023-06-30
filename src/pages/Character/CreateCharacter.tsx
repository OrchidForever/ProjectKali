import React, { useState } from 'react'
import '../../index.css'
import { useLocalStorage } from 'usehooks-ts'
import { useNavigate } from 'react-router-dom'
import ChooseFolk from '../../components/ChooseFolk'
import ChooseCulture from '../../components/ChooseCulture'
import type { playerCharacter, playerCharacterCulture } from '../../types/playerCharacter'

function CreateCharacter() {
  const [playerCharacters, setPlayerCharacters] = useLocalStorage(
    'playerCharacters',
    [].toString()
  )
  const [character, setCharacter] = useState({
    name: '',
    folk: '1',
    culture: {},
    languages: [],
    objects: []
  })
  const navigate = useNavigate()

  const handleInputChange = (
    field: string,
    value: string | number | playerCharacterCulture | undefined | string[],
    action?: string
  ): void => {
    if (action === 'add') {
      const currentValue = character[field as keyof playerCharacter] as string[]
      const newValue = [...currentValue, value]
      setCharacter({
        ...character,
        [field]: newValue
      })
      return
    }
    setCharacter({
      ...character,
      [field]: value
    })
  }

  const handleSave = () => {
    const c = playerCharacters.length === 0 ? [] : JSON.parse(playerCharacters)
    const v = [...c, character]
    setPlayerCharacters(JSON.stringify(v))
    navigate('/', { replace: true })
  }

  return (
    <section className="h-screen bg-gray-100/50">
      <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
        <div className="p-4 border-t-2 border-indigo-400 rounded-lg bg-gray-100/5 ">
          <div className="max-w-sm mx-auto md:w-full md:mx-0">
            <div className="inline-flex items-center space-x-4">
              <a href="#" className="relative block">
                <img
                  alt="profile"
                  src="https://picsum.photos/200"
                  className="mx-auto object-cover rounded-full h-16 w-16 "
                />
              </a>
              <h1 className="text-gray-600">Create a New Character</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <ChooseFolk setFolk={handleInputChange} />
          <hr />
          <ChooseCulture setCulture={handleInputChange} />
          <hr />
          <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
            <button
              className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
              onClick={handleSave}
            >
              Save Character
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateCharacter
