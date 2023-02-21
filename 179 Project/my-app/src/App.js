import {ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import Options from './components/Options';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
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


function App() {
  //const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme = {theme} >
        <NavBar/>  
        <Options icon={<LocalHospitalIcon style={{fill: "#05bffc", height:"125", width:"125"}}/>}  title="Doctor Profile" buttonTitle="Log in" />
        <Options icon={<VerifiedUserIcon style={{fill: "#c89afc", height:"125", width:"125"}}/>} title="Administration Profile" buttonTitle="Log in"/>
      </ThemeProvider>
    </div>
  );
}

export default App;
