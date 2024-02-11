import React from "react";
import CardWrapper from "../card/CardWrapper";

const RegisterForm = () => {
  return (
    <CardWrapper
      headerLabel="Become a member and join us"
      backButtonLabel="Already have an account? Login"
      backButtonHref="/auth/login"
      showSocial
    >
      <h1>Hello</h1>
    </CardWrapper>
  );
};

export default RegisterForm;
