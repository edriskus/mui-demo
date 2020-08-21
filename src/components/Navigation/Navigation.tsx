import React from "react";
import { AppBar, Toolbar, Box, Button, Container } from "@material-ui/core";
import { HowToVote } from "@material-ui/icons";

const Links = ["Why GitBox?", "Team", "Enterprise", "Explore", "Marketplace", "Pricing"];

export default function Navigation() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container>
          <Box display="flex" flexDirection="row">
            <Box display="flex" alignItems="center" paddingX={2}>
              <HowToVote />
            </Box>
            {Links.map((link, i) => (
              <Box paddingX={2} key={i}>
                <Button color="inherit">{link}</Button>
              </Box>
            ))}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
