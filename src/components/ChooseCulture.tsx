import React from 'react'
import '../index.css'
import { Radio, Typography } from '@material-tailwind/react'
import { culture } from '../types/cultures'
import type { cultureObject } from '../types/cultures'

function ChooseCulture({
  setCulture,
}: {
  setCulture: (field: string, value: string | number | undefined) => void
}) {
  const [selectedCulture, setSelectedCulture] = React.useState<cultureObject>({
    id: '',
    name: '',
    subcultures: [],
  })
  return (
    <div className="items w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
      <h2 className="max-w-sm mx-auto md:w-1/3">Choose or Roll Culture</h2>
      <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
        <div>
          <div className="relative py-2 w-max gap-4">
            {culture.map((c, i) => (
              <React.Fragment key={i}>
                <Radio
                  id={c.name}
                  name="culture"
                  value={c.id}
                  key={i}
                  label={<Typography>{c.name}</Typography>}
                  color="deep-purple"
                  onChange={(v) => {
                    setCulture('culture', v.currentTarget.value)
                    setSelectedCulture(
                      culture[parseInt(v.currentTarget.value) - 1]
                    )
                  }}
                />
                <br key={i} />
              </React.Fragment>
            ))}
          </div>
        </div>
        <div>
          <div className="relative py-2">
            {selectedCulture?.subcultures.length > 0 && (
              <div>
                <Typography className="pb-4">
                  {selectedCulture?.naming}
                </Typography>
                <div className="relative ">
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-deep-purple-600 focus:border-transparent"
                    placeholder="Name"
                  />
                  <Typography variant="small" className="pt-3">
                    Example Names:{' '}
                    {culture[parseInt(selectedCulture.id) - 1]?.exampleNames}
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
                  <input
                    type="text"
                    className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-deep-purple-600 focus:border-transparent"
                    placeholder="Name"
                  />
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
