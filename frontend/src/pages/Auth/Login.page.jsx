import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useBoundStore from "../../store/Store";

import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Button,
} from '@mantine/core';
import classes from './AuthenticationTitle.module.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginService, authLoading, user } = useBoundStore((state) => state);

  useEffect(() => {
    if (!!user) {
      navigate("/posts");
    }
  }, [user]);

  const onLogin = async (e) => {
    e.preventDefault();
    let email = e.target.email?.value;
    let password = e.target.password?.value;
    if (!email || !password) return;
    loginService(email, password);
  };
  return (
    <Container size={420} my={40}>
      <form onSubmit={onLogin}>
        <div>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Title ta="center" className={classes.title}>
            Welcome back!
          </Title>
          <TextInput label="Email" placeholder="you@mantine.dev" name="email" type="email" required />
          <PasswordInput label="Password" placeholder="Your password" name="password" type="password" required mt="md" />
          <Button fullWidth mt="xl" type="submit">Sign in</Button>
          {authLoading ? <h2>Loading...</h2> : null}
          </Paper>
        </div>
      </form>
    </Container>
  );
};

export default LoginPage;
