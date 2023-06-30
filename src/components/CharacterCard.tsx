import React, { type ReactElement } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography
} from '@material-tailwind/react'
import type { playerCharacter } from '../types/playerCharacter'
import { folk } from '../types/folk'
import { culture } from '../types/cultures'

export default function CharacterCard ({ character }: { character: playerCharacter }): ReactElement {
  const pcFolk = folk.filter((f) => f.id === character.folk)
  const pcCulture = culture.filter(c => c.id === character.culture.id)
  return (
    <Card className="w-96">
      <CardHeader color="deep-purple" className="relative h-56">
        <img
          // src="http://placekitten.com/352/224"
          src={pcFolk[0].url}
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {character.name}
        </Typography>
        <Typography>{pcCulture[0].keepInMind}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{character.culture.name}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          {pcFolk[0].name}{' '}
          <span>
            <em>{pcFolk[0].otherName}</em>
          </span>
        </Typography>
      </CardFooter>
    </Card>
  )
}
