import { LoadingButton } from '@mui/lab';
import { Grid, TextField, useTheme, Typography, useMediaQuery, Checkbox } from '@mui/material';
import { Box, styled } from '@mui/system';
import useAuth from 'app/hooks/useAuth';
import { Formik } from 'formik';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const FlexBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const FullScreenWrapper = styled(Box)({
  display: 'flex',
  height: '100vh',
});

const HalfScreen = styled(Box)({
  flex: '1',
  padding: '32px',
});

const HalfScreenContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  textAlign: 'center',
});

const ImagePlaceholder = styled(Box)({
  height: '150px',
  width: '150px',
  background: '#ccc',
  marginBottom: '20px',
});

const FormScreen = styled(Box)({
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '32px',
});

const initialValues = {
  email: 'pruebastodos@yopmail.com',
  password: 'dummyPass',
  remember: true,
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  email: Yup.string().email('Invalid Email address').required('Email is required!'),
});

const JwtLogin = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      await login(values.email, values.password);
      navigate('/');
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <FullScreenWrapper>
      {!isMobile && (
        <HalfScreen style={{ background: 'lightgray' }}>
          <HalfScreenContent>
            <h1>Transforma tu manera de firmar fácil, rápido y digital</h1>
            <Typography variant="body2" color="textSecondary">
              En un mundo acelerado, firmar documentos al estilo tradicional puede retrasar tus
              decisiones clave
            </Typography>
          </HalfScreenContent>
        </HalfScreen>
      )}

      <FormScreen>
        <Typography variant="h4" gutterBottom align="center">
          Inicia sesión
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{ marginBottom: '40px' }}
        >
          Lo utilizaremos para iniciar sesión o para crear una cuenta si aún no tienes una
        </Typography>

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit} style={{ width: '60%', maxWidth: '400px' }}>
              <TextField
                fullWidth
                size="small"
                type="email"
                name="email"
                label="Email"
                variant="outlined"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                error={Boolean(errors.email && touched.email)}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                size="small"
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
                helperText={touched.password && errors.password}
                error={Boolean(errors.password && touched.password)}
                sx={{ mb: 1.5 }}
              />
              <FlexBox justifyContent="space-between" sx={{ width: '100%', mb: 2 }}>
                <FlexBox gap={1}>
                  <Checkbox
                    size="small"
                    name="remember"
                    onChange={handleChange}
                    checked={values.remember}
                    sx={{ padding: 0 }}
                    style={{ color: '#7e7e7e' }}
                  />
                  <Typography variant="body2" style={{ color: '#7e7e7e' }}>
                    Remember Me
                  </Typography>
                </FlexBox>
                <NavLink to="/session/forgot-password" style={{ color: '#7e7e7e' }}>
                  Forgot password?
                </NavLink>
              </FlexBox>
              <LoadingButton
                type="submit"
                loading={loading}
                variant="contained"
                sx={{ my: 2, width: '100%' }}
                style={{ backgroundColor: '#FF8548' }}
              >
                Login
              </LoadingButton>
              <Typography variant="body2" align="center">
                Don't have an account?
                <NavLink to="/session/signup" style={{ color: '#fc7e3f' }}>
                  Register
                </NavLink>
              </Typography>
            </form>
          )}
        </Formik>
      </FormScreen>
    </FullScreenWrapper>
  );
};

export default JwtLogin;
