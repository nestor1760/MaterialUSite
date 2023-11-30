import React, { useState } from 'react';
import { AppBar, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Paper, TextField, Toolbar, Typography } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import LayerIcon from '@mui/icons-material/Layers';
import PlayCirkleFilledIcon from '@mui/icons-material/PlayCircleFilled';

import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';

import { styled } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme()

const MyAppBar = styled(AppBar)(({ 
    flexGrow: 1,
}));

const MyMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const MyTypography = styled(Typography)(({
  flexGrow: 1
}))

const MainFeaturesPost = styled(Paper)(({ theme }) => ({
  position: 'relative',
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
}))

const MainFeaturesPostContent = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(6),
  marginTop: theme.spacing(8)
}))

const Overlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundOverlay: 'rgba(0,0,0,.3)'
}))

const CardGrid = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4)
}))

const MyCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%'
}))

const MyCardContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1
}))

const MyBottomNavigation = styled(BottomNavigation)(({ theme }) => ({

}))


const cards = [1,2,3,4,5,6,7,8,9]

const App = () => {
  const [value, setValue] = useState('recents')
  const [open, setOpen] = useState(false)

  const handleChange = (event, newValue) => {
      setValue(newValue)
  }

  const modalWindowOpen = () => {
    setOpen(true)
  }

  const modalWindowClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <>
      <div>
        <MyAppBar position="fixed">
          <Container fixed>
            <Toolbar>
              <MyMenuButton edge='start' color='inherit' aria-label='menu'>
                <MenuIcon />
              </MyMenuButton>
              <MyTypography variant='h6'>Web developer blog</MyTypography>
              <Box mr={3}>
                <Button color='inherit' variant='outlined' onClick={modalWindowOpen}>Log In</Button>

                <Dialog open={open} onClose={modalWindowClose} aria-labelledby='form-dialog-title'>
                  <DialogTitle id='form-dialog-title'> Log in</DialogTitle>
                  <DialogContent> 
                    <DialogContentText>Log in to see more info about site</DialogContentText>
                      <TextField 
                        autoFocus
                        margin='dense'
                        id='name'
                        label='Email Adress'
                        type='email'
                        fullWidth
                      />
                      <TextField 
                        autoFocus
                        margin='dense'
                        id='pass'
                        label='Password'
                        type='password'
                        fullWidth
                      />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={modalWindowClose} color='primary'>Cancel</Button>
                    <Button onClick={modalWindowClose} color='primary'>Log in</Button>
                  </DialogActions>
                </Dialog>
              </Box>
              <Button color='secondary' variant='contained'>Sign Up</Button>
            </Toolbar>
          </Container>
        </MyAppBar>
      </div>
      <main>
        <MainFeaturesPost 
          style={{backgroundImage: `url(https://source.unsplash.com/random)`}}
        >
          <Container fixed>
            <Overlay></Overlay>
              <Grid container>
                <Grid item md={6}>
                  <MainFeaturesPostContent>
                    <Typography
                      component='h1'
                      variant='h3'
                      color='inherit'
                      gutterBottom
                    >
                      Web Developer Blog
                    </Typography>
                    <Typography
                      variant='h5'
                      color='inherit'
                      paragraph
                    >
                      lorem ipsum dolor sit amet, c
                      onsectetur adipiscing elit.
                      Aenean hendrerit dui vitae
                      eleifend rhoncus. Curabitur eu magna quis magna condimentum
                    </Typography>
                    <Button variant='contained' color='secondary'>
                      Learn more
                    </Button>
                  </MainFeaturesPostContent>
                </Grid>
              </Grid>
          </Container>
        </MainFeaturesPost>
        <div>
          <Container maxWidth="md">
            <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
              Web Developer Blog
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              lorem ipsum dolor sit amet, c
              onsectetur adipiscing elit.
              Aenean hendrerit dui vitae
              eleifend rhoncus. Curabitur eu magna quis magna condimentum
              eleifend rhoncus. Curabitur eu magna quis magna condimentum
            </Typography>
            <div>
              <Grid container spacing={5} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>Start now</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>Learn more</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <CardGrid maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card>
                    <MyCardMedia 
                      image='https://source.unsplash.com/random'
                      title='Image title'
                    />
                    <MyCardContent>
                      <Typography variant='h5' gutterBottom>
                        Blog post
                      </Typography>
                      <Typography>
                        Blog post. Web developer blog Web developer blog. Blog post
                      </Typography>
                    </MyCardContent>
                    <CardActions>
                      <Button size='small' color='primary'>
                          View
                      </Button>
                      <Button size='small' color='primary'>
                          Edit
                      </Button>
                      <LayerIcon />
                      <PlayCirkleFilledIcon />
                    </CardActions>
                  </Card>
              </Grid>
            ))}
          </Grid>
        </CardGrid>
      </main>
      <footer>
            <Typography variant='h6' align='center' gutterBottom style={{marginTop: '20px'}}>Footer</Typography>
            <MyBottomNavigation
              value={value}
              onChange={handleChange}
            >
                <BottomNavigationAction 
                  label="Recents"
                  value="recents"
                  icon={<RestoreIcon />}
                />
                <BottomNavigationAction 
                  label="Favorites"
                  value="favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction 
                  label="Nearby"
                  value="nearby"
                  icon={<LocationOnIcon />}
                />
                <BottomNavigationAction 
                  label="Folder"
                  value="folder"
                  icon={<FolderIcon />}
                />
            </MyBottomNavigation>
              <Typography variant='sybtitle1' color='textSecondary' component='p' align='center' style={{margin: '10px 0'}}>
                Practise: React JS & Material UI Site
              </Typography>
      </footer>
      </>
    </ThemeProvider>
  );
};

export default App;
