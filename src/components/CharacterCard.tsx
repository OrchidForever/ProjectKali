import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react'
import type { playerCharacter } from '../types/playerCharacter'
import { folk } from '../types/folk'

export default function CharacterCard({
  character,
}: {
  character: playerCharacter
}) {
  const pcFolk = folk.filter((f) => f.id === character.folk)
  return (
    <Card className="w-96">
      <CardHeader color="deep-purple" className="relative h-56">
        <img
          src="http://placekitten.com/352/224"
          alt="img-blur-shadow"
          className="h-full w-full"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {character.name}
        </Typography>
        <Typography>Test Text</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">$899/night</Typography>
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
