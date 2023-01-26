import React, { useState } from 'react'
import '../../index.css'
import { folk } from '../../types/folk'
import { Select, Option, Input } from '@material-tailwind/react'
import { useLocalStorage } from 'usehooks-ts'
import { useNavigate } from 'react-router-dom'

function CreateCharacter() {
  const [playerCharacters, setPlayerCharacters] = useLocalStorage(
    'playerCharacters',
    [].toString()
  )
  const [character, setCharacter] = useState({
    name: '',
    folk: 0
  })
  const navigate = useNavigate()

  const handleInputChange = (
    field: keyof typeof character,
    value: string | number | undefined
  ): void => {
    setCharacter({
      ...character,
      [field]: value
    })
  }

  const handleSave = () => {
    const c = (playerCharacters.length === 0) ? [] : JSON.parse(playerCharacters)
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
                  alt="profil"
                  src="https://picsum.photos/200"
                  className="mx-auto object-cover rounded-full h-16 w-16 "
                />
              </a>
              <h1 className="text-gray-600">Create a New Character</h1>
            </div>
          </div>
        </div>
        <div className="space-y-6 bg-white">
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Character Name</h2>
            <div className="max-w-sm mx-auto md:w-2/3">
              <div className=" relative ">
                <Input
                  onInput={(v) => {
                    handleInputChange('name', v.currentTarget.value)
                  }}
                  color="deep-purple"
                  size="lg"
                  label="Name"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3">Personal info</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
              <div>
                <div className="relative py-2 flex-1">
                  <Select
                    onChange={(v) => {
                      handleInputChange('folk', v)
                    }}
                    label="Folk"
                    color="deep-purple"
                    size="lg"
                  >
                    {folk.map((f, i) => (
                      <Option value={f.id.toString()} key={i}>
                        {f.name}{' '}
                        <span className="text-gray-600 pl-2 italic text-xs">
                          ({f.otherName})
                        </span>
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>

              <div>
                <div className="relative ">
                  <input
                    type="text"
                    id="user-info-phone"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Culture"
                  />
                </div>
              </div>
            </div>
          </div>
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
