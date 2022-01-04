import React from 'react'
import {Box,Typography,Paper,Toolbar} from "@material-ui/core"

const CandidateApply = () => {
  return (
    <div align='center'>
      <Box component={Paper}>
        <Toolbar/>
        <Typography varient="h2">Candidate Apply</Typography>
        <Toolbar/>
      </Box>
    </div>
  )
}

export default CandidateApply
