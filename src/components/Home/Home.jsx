import { Container, Grid, Grow } from "@material-ui/core";
import React from "react";

export const Home = () => (
  <Grow in>
    <Container maxWidth="lg">
      <Grid container spacing={3}></Grid>
    </Container>
  </Grow>
);

export default Home;
