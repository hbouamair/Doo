import React from "react";
import { Container, Button, Link } from "react-floating-action-button";

const ActionButtons = () => {
  return (
    <Container>
      <Link href="#" icon="far fa-sticky-note" />
      <Link href="#" icon="fas fa-user-plus" />
      <Button icon="fas fa-plus"  />
    </Container>
  );
};

export default ActionButtons;
