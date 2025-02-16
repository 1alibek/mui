import React from "react";
import { Box, Container, Grid, Card, Typography, Button } from "@mui/material";

import showcase from "../../assets/img/showcase.png"
const Showcase = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", p: 3 }}>
      <Container maxWidth="xl" className="pb-12">
        <Grid container spacing={3} className="flex items-center gap-4">
          {/* Chap tomon */}
          <Grid item xs={12} md={5} lg={4}>
            <Box>
              <Typography variant="h3" fontWeight={700} color="primary">
                Move faster
              </Typography>
              <Typography variant="h4" fontWeight={700}>
                with intuitive <br /> React UI tools
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                MUI offers a comprehensive suite of free UI tools to help you <br />
                ship new features faster. Start with Material UI, our
                fully-loaded <br /> component library, or bring your own design system
                to our <br /> production-ready components.
              </Typography>
              <Button variant="contained" sx={{ mt: 3 }}>
                Discover the Core Libraries
              </Button>
            </Box>
          </Grid>

          <div>
            <img src={showcase} alt="" />
          </div>
        </Grid>
      </Container>
    </Box>
  );
};

export default Showcase;
