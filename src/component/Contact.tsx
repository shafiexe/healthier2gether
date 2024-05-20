import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormData = {
      firstName: event.currentTarget.firstName.value,
      lastName: event.currentTarget.lastName.value,
      email: event.currentTarget.email.value,
      phoneNumber: event.currentTarget.phoneNumber.value,
      message: event.currentTarget.message.value,
    };
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      console.log("Email sent successfully!");
    } else {
      console.log("Failed to send email.");
    }
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Box display={"flex"} textAlign={"left"} mt={3}>
      <Card
        sx={{
          maxWidth: 600,
          background: " url(https://ushasoftware.com/contact/oval.svg)",
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2} direction="column">
              <Stack direction="row" spacing={2}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Stack>
              <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                required
              />
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                variant="outlined"
                type="tel"
                fullWidth
              />
              <TextField
                id="message"
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
              />
              <Button
                size="large"
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "capitalize",
                  background: "#028386",
                  "&:hover": {
                    background: "#70A19B",
                  },
                }}
              >
                Get Involved
              </Button>
            </Stack>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactForm;
