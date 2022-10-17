
import { Container, Grid } from '@mui/material';
import './App.css';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { BrowserRouter, Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <Container>
      <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3} style={{backgroundColor:'red'}}>
            <Profile/>
          </Grid>
          <Grid item xs style={{backgroundColor:'blue'}}>
            <Header/>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Resume/>} />
                <Route path='/portfolio' element={<Portfolio/>}/>
              </Routes>
            </BrowserRouter>
            <Footer/>
          </Grid>
      </Grid>
    </Container>
  );
}

export default App;
