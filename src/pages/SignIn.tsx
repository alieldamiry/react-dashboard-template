import { Form, Formik } from "formik";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FormikControl from "src/components/formik/FormikControl";
import { login } from "src/redux/slices/authSlice";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "src/redux/store";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://onetecgroup.com/">
        OneTecGroup
      </Link>
      {` ${new Date().getFullYear()}`}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const isLoading = useAppSelector((state) => state.auth.status === "loading");
  const { t } = useTranslation();

  const formikSubmit = (data: { email: string; password: string }) => {
    dispatch(login(data));
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Required Field"),

    password: Yup.string()
      .min(6, "6 characters minimum")
      .required("Required Field"),
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t("Sign in")}
          </Typography>
          <Box component="div" sx={{ mt: 1 }}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={formikSubmit}
            >
              <Form>
                <FormikControl
                  control="input"
                  name="email"
                  type="email"
                  label="email address"
                  // label={t("email address")}
                />
                <FormikControl
                  margin="normal"
                  control="input"
                  name="password"
                  type="password"
                  // label={t("password")}
                  label="password"
                />

                <Button
                  disabled={isLoading}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {t("Sign In")}
                </Button>
              </Form>
            </Formik>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
