// ----------------------------------------------------------------------------------
//  day 13. Layout
// ----------------------------------------------------------------------------------

import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: JSX.Element;
}

const Sidebar = styled.div`
  width: 30%;
  background-color: skyblue;
`;

const Content = styled.div`
  width: 70%;
`;

const Container = styled.div`
  height: 500px;
  display: flex;
`;

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router.asPath);

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <Container>
        <Sidebar>사이드바</Sidebar>
        <Content>{props.children}</Content>
      </Container>
      <LayoutFooter />
    </>
  );
}
