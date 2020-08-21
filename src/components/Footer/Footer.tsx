import React from "react";
import { Container, Typography, Grid, List, ListSubheader, ListItem, ListItemText, Box, Paper } from "@material-ui/core";

const Links = [
  {
    title: "Product",
    links: ["Features", "Security", "Team", "Enterprise", "Customer stories", "Pricing", "Resources", "Roadmap"],
  },
  {
    title: "Platform",
    links: ["Developer", "Partners", "Atom", "Electron", "Desktop"],
  },
  {
    title: "Support",
    links: ["Help", "Community", "Professional", "Learning", "Status", "Contact"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press", "Social", "Shop"],
  },
];

export default function Footer() {
  return (
    <Paper elevation={0}>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Box paddingTop={4}>
              <Typography variant="h3">GitBox</Typography>
            </Box>
          </Grid>
          {Links.map((column, i) => (
            <Grid item md={2} key={i}>
              <List subheader={<ListSubheader>{column.title}</ListSubheader>} dense={true}>
                {column.links.map((link, j) => (
                  <ListItem button key={j}>
                    <ListItemText primary={link} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}
