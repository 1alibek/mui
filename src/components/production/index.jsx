import React from 'react'
import { Box, Card, Typography, Stack, Chip } from "@mui/material";

import MuiIcon from "@mui/icons-material/Apps";

import cod1 from "../../assets/img/cod2.png";
import cod2 from "../../assets/img/cod.png";
const Production = () => {
  return (
    <div className="bgg pb-12">
      <div className=" flex items-center justify-center mt-12 gap-10 w-[90%] mx-auto min-[1440px]:w-[1440px]">
        <div>
          <p className="text-[#0073e6] font-bold">Products</p>
          <h1 className="font-bold text-[36px]">
            Every component you need is <br />
            <span className="text-[#0073e6]">ready for production</span>
          </h1>
          <p>
            Build at an accelerated pace without sacrificing flexibility or
            control.
          </p>
          <div className="pr-12">
            <Card
              sx={{
                p: 2,
                borderRadius: 2,
                border: `1px solid `,
                boxShadow: 0,
              }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <MuiIcon />
                <Box>
                  <Typography fontWeight="bold">Material UI</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Foundational components for shipping features faster.
                  </Typography>
                </Box>
              </Stack>
            </Card>

            <Stack spacing={3} sx={{ mt: 3 }}>
              {/* MUI X */}
              <Stack direction="row" spacing={2}>
                <MuiIcon />
                <Box>
                  <Typography fontWeight="bold">MUI X</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Advanced components for complex use cases.
                  </Typography>
                </Box>
              </Stack>

              {/* Toolpad */}
              <Stack direction="row" spacing={2}>
                <MuiIcon />
                <Box>
                  <Typography fontWeight="bold">
                    Toolpad <Chip label="BETA" size="small" color="primary" />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Components and tools for building dashboards and internal
                    apps.
                  </Typography>
                </Box>
              </Stack>

              {/* Templates */}
              <Stack direction="row" spacing={2}>
                <MuiIcon />
                <Box>
                  <Typography fontWeight="bold">Templates</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Professionally built UIs to jumpstart your next project.
                  </Typography>
                </Box>
              </Stack>

              {/* Design kits */}
              <Stack direction="row" spacing={2}>
                <MuiIcon />
                <Box>
                  <Typography fontWeight="bold">Design kits</Typography>
                  <Typography variant="body2" color="text.secondary">
                    The core components available on your favorite design tool.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </div>
        </div>
        <div>
          <img src={cod1} alt="" />
          <img src={cod2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Production