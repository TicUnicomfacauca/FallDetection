import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function About(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
        web application to alert about the fall of people from beds or stretchers.
        </Typography>
        <Typography component="h6">
        Project funded by the Comfacauca University Corporation, UEES 2019 call.
            <div style={{textAlign:'center'}}>
                  <strong>Investigadores Principales:</strong><br/>
                  <a href="mailto:cristianchilito@unicomfacauca.edu.co">Jóven Investigador Ing. Cristian Duban Chilito</a> <br/>       
                  <a href="mailto:jfmunoz@unicomfacauca.edu.co">Mg. Julian Fernando Muñoz</a>    <br/>    
                  <a href="mailto:lerazo@unicomfacauca.edu.co">Mg. Leydi Rocio Erazo</a>      <br/>  
                  <a href="mailto:hcastrillon@unicomfacauca.edu.co">PhD. Helder Yesid Castrillón</a> <br/>  
                  <p>Corporación Universitaria Comfacauca - 2020 </p>          
                  <p><a href="https://github.com/TicUnicomfacauca/FallDetection" target="_blank"> Código fuente</a></p>
                  <p>Licencia MIT</p>
                  <strong>Research group:</strong>
                  <br></br>
                  <a href="http://www.unicomfacauca.edu.co/index.php/investigacion/grupos-de-investigacion/grupo-tic-unicomfacauca" target="_blank"><img src="http://www.unicomfacauca.edu.co/cache/mod_roksprocket/01fd3c28e20a9591fc5ae0e7ac32c16e_200_200.png"/></a>
                </div>
          </Typography>
      </Paper>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
