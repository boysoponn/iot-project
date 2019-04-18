import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import styled  from 'styled-components'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class AlertDialogSlide extends React.Component {

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          TransitionComponent={Transition}
          onClose={this.props.handleClose}
          maxWidth="lg"
        >
          <DialogContent>
            <img alt="" src={this.props.image} width="100%"/>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;
