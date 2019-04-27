import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styled  from 'styled-components'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing.unit+20,
  },
});

class MouseOverPopover extends React.Component {
  state = {
    anchorEl: null,
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

if(this.props.status){
  return (
        <Grid item xs={6}
        aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={this.handlePopoverOpen}
          onMouseLeave={this.handlePopoverClose}
        >
          <Img width={this.props.width?this.props.width:"50"} src={this.props.image} />
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>{this.props.text}</Typography>
        </Popover>
        </Grid>
    )
    }else{
      return null;
    }
    
  }
}

MouseOverPopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MouseOverPopover);

const Img = styled.img`
width:${props => props.width+'%'};
margin-left:${props => props.left?props.left:'0px' };
`;
