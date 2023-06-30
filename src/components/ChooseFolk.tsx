import React, { type ReactElement } from 'react'
import '../index.css'
import { folk } from '../types/folk'
import { Radio, Typography } from '@material-tailwind/react'

function ChooseFolk ({ setFolk }: { setFolk: (field: string, value: string | number | undefined) => void }): ReactElement {
  return (
    <div className="items w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
      <h2 className="max-w-sm mx-auto md:w-1/3">Choose Folk</h2>
      <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
        <div>
          <div className="relative py-2 w-max gap-4">
            {folk.map((f, i) => (
              <React.Fragment key={`${i}_${f.name}_fragment`}>
                <Radio
                  id={f.name}
                  name="folk"
                  value={f.id}
                  key={`${i}_${f.name}_radio`}
                  label={
                    <Typography>
                      {f.name}{' '}
                      <span>
                        <em>({f.otherName})</em>
                      </span>
                    </Typography>
                  }
                  color="deep-purple"
                  defaultChecked={f.id === '1'}
                  onChange={(v) => {
                    console.log(v.currentTarget.value)
                    setFolk('folk', v.currentTarget.value)
                  }}
                />
                <br key={`${i}_${f.name}_break`} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseFolk
