import React from "react";
import { Grid, Card, CardContent, Typography, Link, Container, Box, ThemeProvider } from "@material-ui/core";
import UserForm from "../../components/UserForm/UserForm";
import { LightBasicTheme } from "../../styles/BasicTheme";

export default function Signup() {
  return (
    <Container maxWidth="md">
      <Box paddingY={6}>
        <Grid container spacing={4} alignItems="center">
          <Grid item md={6}>
            <Typography variant="h2" gutterBottom={true}>
              Built for developers
            </Typography>
            <Typography>
              GitBox is a development platform inspired by the way you work. From <Link color="secondary">open source</Link> to <Link color="secondary">business</Link>, you can host and review code, manage projects, and build software alongside 50 million developers.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <ThemeProvider theme={LightBasicTheme}>
              <Card>
                <CardContent>
                  <UserForm />
                </CardContent>
              </Card>
            </ThemeProvider>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
