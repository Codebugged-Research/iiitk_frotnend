import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Switch } from '@mui/material';
import MKTypography from 'components/MKTypography';

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [rememberMe, setRememberMe] = React.useState(false);


  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleCloseC = () => {
    setOpen(false);
    setRememberMe(false)
  };

  const handleCloseA = () => {
    setOpen(false);
    setRememberMe(true)
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}>
      <Switch
        checked={rememberMe}
        // onChange={handleSetRememberMe}
        />
        <MKTypography
             variant="button"
            fontWeight="regular"
            color="text"
            // onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
            >
            &nbsp;&nbsp;<b style={{ color: "red" }}>* </b>I Agree to the Terms and Conditions
        </MKTypography>
      </Button>
      <Dialog
        open={open}
        onClose={open}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Terms and Conditions</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
             `A terms and conditions agreement outlines the website administrator’s rules regarding user behavior and provides information about the actions the website administrator can and will perform.

            Essentially, your terms and conditions text is a contract between your website and its users. In the event of a legal dispute, arbitrators will look at it to determine whether each party acted within their rights.

            Creating the best terms and conditions page possible will protect your business from the following:

            Abusive users: Terms and Conditions agreements allow you to establish what constitutes appropriate activity on your site or app, empowering you to remove abusive users and content that violates your guidelines.
            Intellectual property theft: Asserting your claim to the creative assets of your site in your terms and conditions will prevent ownership disputes and copyright infringement.
            Potential litigation: If a user lodges a legal complaint against your business, showing that they were presented with clear terms and conditions before they used your site will help you immensely in court.
            In short, terms and conditions give you control over your site and legal enforcement if users try to take advantage of your operations.
            A terms and conditions agreement outlines the website administrator’s rules regarding user behavior and provides information about the actions the website administrator can and will perform.

            Essentially, your terms and conditions text is a contract between your website and its users. In the event of a legal dispute, arbitrators will look at it to determine whether each party acted within their rights.

            Creating the best terms and conditions page possible will protect your business from the following:

            Abusive users: Terms and Conditions agreements allow you to establish what constitutes appropriate activity on your site or app, empowering you to remove abusive users and content that violates your guidelines.
            Intellectual property theft: Asserting your claim to the creative assets of your site in your terms and conditions will prevent ownership disputes and copyright infringement.
            Potential litigation: If a user lodges a legal complaint against your business, showing that they were presented with clear terms and conditions before they used your site will help you immensely in court.
            In short, terms and conditions give you control over your site and legal enforcement if users try to take advantage of your operations.`,
              
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseC}>Cancel</Button>
          <Button onClick={handleCloseA}>Accept</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
