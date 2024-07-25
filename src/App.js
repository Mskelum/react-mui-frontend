import React, { useState } from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
import { Box, createTheme, Stack } from '@mui/material'
import RightBar from './components/RightBar'
import { ThemeProvider } from '@emotion/react'
import AddPost from './components/AddPost'

const App = () => {

  const [mode, setMode] = useState('light');

  const DarkTheme = createTheme({
    palette: {
      mode: mode
    }
  })

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <SideBar setMode={setMode} mode={mode}/>
          <Feed />
          <RightBar />
        </Stack>
        <AddPost/>
      </Box>

    </ThemeProvider>
  )
}

export default App
