import {ThemeProvider, createTheme, makeStyles} from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import {Typography} from '@material-ui/core';
import Options from './components/Options';
import Footer from './components/Footer';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import './HopkinsLogin.css';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
    background: {
      paper: "#000000",
    }
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})


<<<<<<< Updated upstream
function Login() {
  const classes = styles();
  return (
    <div className="Login">
=======
function App() {
  const classes = styles();
  return (
    <div className="App">
>>>>>>> Stashed changes
      <ThemeProvider theme = {theme} >
        <NavBar/>  

        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             Welcome, please sign in
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales congue tristique.
            Why did the scarecrow get an award? Because he was out-standing in his field. If you find this 
            hidden message, congrats. Duis interdum lorem sit amet ligula pretium, sed rutrum urna semper. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          </Typography>
        </div>

      <div className={`${classes.grid} ${classes.bigSpace}`}>
        <Options icon={<LocalHospitalIcon style={{fill: "#05bffc", height:"200", width:"200"}}/>}  title="Doctor Profile" buttonTitle="Log in" />
        <Options icon={<VerifiedUserIcon style={{fill: "#c89afc", height:"200", width:"200"}}/>} title="Administration Profile" buttonTitle="Log in"/>
      </div>

      <div className={classes.bigSpace}>
        <Footer/>
      </div>

      </ThemeProvider>

    </div>
  );
}

<<<<<<< Updated upstream
export default Login;
=======
export default App;
>>>>>>> Stashed changes
