// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import GTUMainPage from './pages/main/gtu-main';
import DefaultFooter from '../components/footer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../assets/theme';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import footerRoutes from './footer.routes';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GTUMainPage />
      <Container>
        <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          <div className="video-container">
            <div className="video-wrapper">
              <video width="100%" height="100%" preload="auto">
                <source
                  src="../../assets/video/ukrainian-flag.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </Grid>
      </Container>
      <DefaultFooter content={footerRoutes} />
    </ThemeProvider>
  );
}

export default App;
