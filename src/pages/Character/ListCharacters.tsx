/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useReadLocalStorage } from 'usehooks-ts';
import '../../index.css';
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function ListCharacter() {
  const playerCharacters = useReadLocalStorage('playerCharacters');
  return (
    <div>
      <Typography variant="h1" color="deep-purple">
        Number of Characters: {typeof playerCharacters == 'string' ? JSON.parse(playerCharacters).length : 0}
      </Typography>
      <Button variant="outlined" size="lg" color="deep-purple"><Link to='/create-character'>Create Character</Link></Button>
    </div>
  );
}

export default ListCharacter;