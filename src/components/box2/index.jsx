import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import profil from "../../assets/img/profil.png"
import sss from "../../assets/icons/sss.svg";

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: theme.spacing(2),
  height: "100%",
}));

const StatBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: theme.spacing(0.5),
}));

const testimonials = [
  {
    name: "Kivi Gil",
    role: "Engineer & Designer",
    company: "Period",
    avatar: "/placeholder.svg",
    text: "We've relied on Material UI really heavily. I override a lot of default styles to try and make things our own, but the time we save with complex components like the Autocomplete and the Grid Grid are so worth it. Every other library I tried was either too opinionated or too bare bones. We've found that Material UI has it all under one roof which is a huge help for our small team.",
  },
  {
    name: "Jean-Laurent de Morlhon",
    role: "VP of Engineering",
    company: "Docker",
    avatar: "/placeholder.svg",
    text: "We've relied on Material UI really heavily. I override a lot of default styles to try and make things our own, but the time we save with complex components like the Autocomplete and the Grid Grid are so worth it. Every other library I tried was either too opinionated or too bare bones. We've found that Material UI has it all under one roof which is a huge help for our small team.",
  },
  {
    name: "Kivi Gil",
    role: "Engineer & Designer",
    company: "Period",
    avatar: "/placeholder.svg",
    text: "We've relied on Material UI really heavily. I override a lot of default styles to try and make things our own, but the time we save with complex components like the Autocomplete and the Grid Grid are so worth it. Every other library I tried was either too opinionated or too bare bones. We've found that Material UI has it all under one roof which is a huge help for our small team.",
  },
  {
    name: "Jean-Laurent de Morlhon",
    role: "VP of Engineering",
    company: "Docker",
    avatar: "/placeholder.svg",
    text: "We've relied on Material UI really heavily. I override a lot of default styles to try and make things our own, but the time we save with complex components like the Autocomplete and the Grid Grid are so worth it. Every other library I tried was either too opinionated or too bare bones. We've found that Material UI has it all under one roof which is a huge help for our small team.",
  },
  // Add other testimonials similarly
];

const stats = [
  { value: "5.8M", label: "Weekly downloads on npm" },
  { value: "93.9k", label: "Stars on GitHub" },
  { value: "3.0k", label: "Open-source contributors" },
  { value: "19.2k", label: "Follower count" },
];

export default function Testimonials() {
  return (
    <Box
      sx={{
        bgcolor: "#0A1929",
        color: "white",
        py: 8,
        px: 4,
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Supported by thousands of
        </Typography>
        <Typography
          variant="h4"
          component="span"
          sx={{
            color: "#007FFF",
            display: "block",
            mb: 6,
          }}
        >
          developers and designers
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <StatBox>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  {stat.label}
                </Typography>
              </StatBox>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <StyledCard>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: 1.7,
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar src={profil} />
                    <Box>
                      <Typography
                      className="text-white"
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: "auto" }}>
                      <img
                        src={sss}
                        alt={'asas'}
                        style={{ height: 24 }}
                      />
                    </Box>
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
