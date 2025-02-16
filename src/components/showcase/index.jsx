import React from "react";
import { Box, Container, Grid, Card, Typography, Button } from "@mui/material";

const Showcase = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", p: 3 }}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {/* Chap tomon */}
          <Grid item xs={12} md={5} lg={4}>
            <Box>
              <Typography variant="h3" fontWeight={700} color="primary">
                Move faster
              </Typography>
              <Typography variant="h4" fontWeight={700}>
                with intuitive React UI tools
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                MUI offers a comprehensive suite of free UI tools to help you
                ship new features faster.
              </Typography>
              <Button variant="contained" sx={{ mt: 3 }}>
                Discover the Core Libraries
              </Button>
            </Box>
          </Grid>

          {/* Ong tomon */}
          <Grid item xs={12} md={7} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={{ p: 2, bgcolor: "primary.main", color: "white" }}>
                  <Typography variant="h6">
                    Customize every button and chip instance primary color
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6">Calendar</Typography>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6">Weather</Typography>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ p: 2 }}>
                  <Typography variant="h6">Music Player</Typography>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Showcase;
