import React from "react";
import { TextField, Typography, Link, Box, Button, makeStyles, Theme } from "@material-ui/core";

const shrinkProps = { shrink: true };

const useStyles = makeStyles((theme: Theme) => ({
  highlightedButton: {
    background: theme?.palette?.highlight?.main,
  },
}));

export default function UserForm() {
  const { highlightedButton } = useStyles();
  return (
    <form>
      <TextField InputLabelProps={shrinkProps} variant="outlined" fullWidth margin="normal" label="Username" />
      <TextField InputLabelProps={shrinkProps} placeholder="john@gitbox.com" variant="outlined" fullWidth margin="normal" label="Email" />
      <TextField InputLabelProps={shrinkProps} variant="outlined" type="password" fullWidth margin="normal" label="Password" />
      <Typography variant="body2">
        Make sure it's at least 10 characters and includes a number and a lowercase letter.
        <Link color="secondary">More info.</Link>
      </Typography>
      <Box paddingY={2}>
        <Button classes={{ root: highlightedButton }} variant="contained" size="large" color="primary" fullWidth>
          Sign up for GitBox
        </Button>
      </Box>
      <Typography variant="body2">
        By clicking “Sign up for GitBox, you agree to our <Link color="secondary">Terms of Service</Link> and <Link color="secondary">Privacy Statement</Link>. We’ll occasionally send you account related emails.
      </Typography>
    </form>
  );
}
