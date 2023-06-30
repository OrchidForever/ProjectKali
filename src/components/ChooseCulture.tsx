/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { type ReactElement, useEffect } from 'react'
import '../index.css'
import { Radio, Typography, Tooltip } from '@material-tailwind/react'
import { culture } from '../types/cultures'
import type { playerCharacterCulture } from '../types/playerCharacter'
import type { cultureObject } from '../types/cultures'
import {
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'

function ChooseCulture ({ setCulture }: { setCulture: (field: string, value: string | number | playerCharacterCulture | undefined | string[]) => void }): ReactElement {
  const [selectedCulture, setSelectedCulture] = React.useState<playerCharacterCulture>({
    id: '',
    name: '',
    honorifics: '',
    subculture: {
      id: '',
      name: '',
      description: ''
    },
    lineage: {
      id: '',
      name: '',
      description: ''
    },
    socialStanding: {
      id: '',
      name: '',
      description: ''
    }
  })

  const [startingObjectsSubculture, setStartingObjectsSubculture] = React.useState<string[] | undefined>([])
  const [startingLanguageSubculture, setStartingLanguageSubculture] = React.useState<string[] | undefined>([])

  const [userSelectedCulture, setUserSelectedCulture] = React.useState<cultureObject>({
    id: '',
    name: '',
    subcultures: [],
    startingObjectPick: 0,
    startingObjects: [],
    lineage: [],
    socialStanding: []
  })

  useEffect(() => {
    setCulture('culture', selectedCulture)
  }, [selectedCulture])

  useEffect(() => {
    setCulture('languages', startingLanguageSubculture)
  }, [startingLanguageSubculture])

  useEffect(() => {
    setCulture('objects', startingObjectsSubculture)
  }, [startingObjectsSubculture])

  return (
    <div className="items w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
      <h2 className="max-w-sm mx-auto md:w-1/3">Choose or Roll Culture</h2>
      <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
        <div>
          <div className="relative py-2 w-max gap-4">
            {culture.map((c, i) => (
              <React.Fragment key={`${i}_${c.name}_fragment`}>
                <Radio
                  id={c.name}
                  name="culture"
                  value={c.id}
                  key={`${i}_${c.name}_radio`}
                  label={<Typography>{c.name}</Typography>}
                  color="deep-purple"
                  onChange={(v) => {
                    const value: cultureObject = culture[parseInt(v.currentTarget.value) - 1] as cultureObject
                    console.log(value)
                    setSelectedCulture({
                      ...selectedCulture,
                      id: value.id,
                      name: value.name
                    })
                    setUserSelectedCulture(value)
                  }}
                />
                <br key={`${i}_${c.name}_break`} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <div className="relative py-2">
            {userSelectedCulture?.subcultures.length > 0 && (
              <div>
                <Typography className="pb-4">
                  {userSelectedCulture?.naming}
                </Typography>
                <div className="relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-deep-purple-600 focus:border-transparent"
                    placeholder="Name"
                    onChange={(v) => {
                      const value = v.currentTarget.value
                      setCulture('name', value)
                    }}
                  />
                  <Typography variant="small" className="pt-3">
                    Example Names:{' '}
                    {userSelectedCulture?.exampleNames}
                  </Typography>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="relative py-2">
            {selectedCulture.name !== '' && (
              <div>
                <Typography className="pb-4">
                  Subculture is from which specific place in the mahamandala
                  they come from, which colors how they approach the world.
                </Typography>
                <div className="relative ">
                  {userSelectedCulture.subcultures.map((c, i) => (
                    <React.Fragment key={`${i}_${c.name}_fragment`}>
                      <Radio
                        id={c.id}
                        name="subculture"
                        value={c.id}
                        key={`${i}_${c.name}_radio`}
                        label={<Typography>{c.name} <Tooltip content={c.description}>
                          <QuestionMarkCircleIcon style={{ display: 'initial' }} className="h-6 w-6 text-gray-500" /></Tooltip></Typography> }
                        color="deep-purple"
                        onChange={(v) => {
                          const subcultureId: number = Number(v.currentTarget.value)
                          const subculture = userSelectedCulture.subcultures[subcultureId - 1]
                          setSelectedCulture({
                            ...selectedCulture,
                            subculture: {
                              id: subculture.id,
                              name: subculture.name,
                              description: subculture.description
                            }
                          })
                          setStartingObjectsSubculture(subculture.objectBonus)
                          setStartingLanguageSubculture(subculture.languageBonus)
                        }}
                      />
                      <br key={`${i}_${c.name}_break`} />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="relative py-2">
            {selectedCulture.name !== '' && (
              <div>
                <Typography className="pb-4">
                   Choose from the following lineages.
                </Typography>
                <div className="relative ">
                  {userSelectedCulture.lineage.map((c, i) => (
                    <React.Fragment key={`${i}_${c.name}_fragment`}>
                      <Radio
                        id={c.id}
                        name="lineage"
                        value={c.id}
                        key={`${i}_${c.name}_radio`}
                        label={<Typography>{c.name} <Tooltip content={c.description}>
                          <QuestionMarkCircleIcon style={{ display: 'initial' }} className="h-6 w-6 text-gray-500" /></Tooltip></Typography> }
                        color="deep-purple"
                        onChange={(v) => {
                          const lineageId: number = Number(v.currentTarget.value)
                          const lineage = userSelectedCulture.subcultures[lineageId - 1]
                          setSelectedCulture({
                            ...selectedCulture,
                            lineage: {
                              id: lineage.id,
                              name: lineage.name,
                              description: lineage.description
                            }
                          })
                        }}
                      />
                      <br key={`${i}_${c.name}_break`} />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="relative py-2">
            {selectedCulture.name !== '' && (
              <div>
                <Typography className="pb-4">
                   This showcases the social class of your character before they became Kadungganan. Your social standing might have come from your lineage, or it might have come from something that happened after your lineage (ie. a merchant prince that has fallen from grace or accrued too much debt). It is up to you to connect the dots.
                </Typography>
                <div className="relative ">
                  {userSelectedCulture.socialStanding.map((c, i) => (
                    <React.Fragment key={`${i}_${c.name}_fragment`}>
                      <Radio
                        id={c.id}
                        name="socialStanding"
                        value={c.id}
                        key={`${i}_${c.name}_radio`}
                        label={<Typography>{c.name} <Tooltip content={c.description}>
                          <QuestionMarkCircleIcon style={{ display: 'initial' }} className="h-6 w-6 text-gray-500" /></Tooltip></Typography> }
                        color="deep-purple"
                        onChange={(v) => {
                          const standingId: number = Number(v.currentTarget.value)
                          const socialStanding = userSelectedCulture.socialStanding[standingId - 1]
                          setSelectedCulture({
                            ...selectedCulture,
                            socialStanding: {
                              id: socialStanding.id,
                              name: socialStanding.name,
                              description: socialStanding.description
                            }
                          })
                        }}
                      />
                      <br key={`${i}_${c.name}_break`} />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseCulture
