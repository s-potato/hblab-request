import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import styled from 'styled-components';
import Background from '../../assets/img/backg.jpeg';

export const useThemes = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    background: `linear-gradient( rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${Background})`,
    backgroundSize: 'cover',
  },

  mainContent: {
    padding: '0',
    height: '100%'
  },

  childContent: {
    height: '100%'
  },

  button: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    },
    marginTop: theme.spacing(8),
    width: '80%'
  },

  input: {
    width: "80%",
    marginTop: theme.spacing(10),
    '&:hover': {
      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      borderRadius: 7,
      border: 'none',
    },
  },

  center: {
    borderRadius: 5,
    backgroundColor: 'white',
    boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.35)',
    height: '100%',
    width: '70%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '60%',
    },
  },

  singGG: {
    width: '10%',
    backgroundColor: '#fff',
    border: '1px solid rgba(0,0,0,0.3)',
    boxShadow: 'none',
    margin: '0'
  },

  signinText: {
    fontSize: '30px',
    fontWeight: 'bold'
  },

  image: {
    margin: '20px 0px 0px 0px',
    height: "10%"
  },

  error: {
    position: "absolute",
    bottom: theme.spacing(-6),
    left: '12%',
    color: red[500],
  },

  boxSelect: {
    position: "relative",
  },

  rememberMe: {
    padding: '4% 0 0 10%',
    textAlign: 'left'
  },

  forgotPass: {
    padding: '4% 10% 0 0',
    textAlign: 'right'
  },

  sizeGoogle: {
    width: '30px',
    margin: '0'
  },

  hr: {
    marginTop: 40,
    width: '90%',
    size: 1
  },

  signinTextGG: {
    fontSize: '25px',
    paddingTop: theme.spacing(4),
  },

}));

export const Form = styled.form`
    width: 100%;
    padding: 0px 20px 0px 20px;
    display: inline-block;
    box-sizing: border-box;
  `
