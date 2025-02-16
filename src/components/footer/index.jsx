import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import logo from "../../assets/icons/logo.svg";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    borderRadius: theme.spacing(1),
    "&:hover fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const footerLinks = {
  Products: ["Material UI", "MUI Base", "MUI X", "Toolpad"],
  Resources: [
    "Material Icons",
    "Templates",
    "Components",
    "Customization",
    "Design Kits",
  ],
  Explore: ["Documentation", "Store", "Blog", "Showcase", "Roadmap"],
  Company: [
    "About",
    "Vision",
    "Careers",
    "Support",
    "Privacy policy",
    "Contact us",
  ],
};

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Ship your next project{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              faster
            </Box>
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Find out why MUI's tools are trusted by thousands of open-source
            developers and teams around the world.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 2,
              px: 3,
              py: 1,
            }}
          >
            Discover the Core libraries
          </Button>
        </Box>

        {/* Footer Grid Section */}
        <Grid container spacing={4} alignItems="flex-start" className="justify-between">
          {/* Newsletter Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <img
                  src={logo}
                  alt="MUI Logo"
                  style={{ height: 32, marginRight: 8 }}
                />
                <Typography variant="h6">MUI</Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Keep up to date
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Join our newsletter for regular updates. No spam ever.
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <StyledTextField
                  fullWidth
                  placeholder="example@email.com"
                  size="small"
                />
                <Button variant="contained">Subscribe</Button>
              </Box>
            </Box>
          </Grid>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <Grid item xs={12} sm={6} md={2} key={category}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {category}
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
                {links.map((link) => (
                  <Box component="li" key={link} sx={{ mb: 1 }}>
                    <FooterLink href="#" underline="none">
                      {link}
                      {link === "Careers" && (
                        <Box
                          component="span"
                          sx={{
                            ml: 1,
                            px: 1,
                            py: 0.5,
                            bgcolor: "success.main",
                            color: "white",
                            borderRadius: 1,
                            fontSize: "0.75rem",
                          }}
                        >
                          HIRING
                        </Box>
                      )}
                    </FooterLink>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
