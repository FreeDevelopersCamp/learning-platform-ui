import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const StyledAppLayout = styled.div`
  flex: 1;
  display: grid;
  padding: 0 1rem;
`;

const Main = styled.main`
  width: 100%; /* Equivalent to w-full */
  margin: 0 auto; /* Equivalent to mx-auto */
  background-color: var(--color-grey-100);
  /* overflow: scroll; */
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
