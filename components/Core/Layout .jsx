import React from 'react'
import Header from "./Header/Header";
import NavBar from "./footer/footer";
import { ContactModal } from "./contact-modal/ContactModal"
import ContextProvider from "./Context"

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = props => (
  
  <ContextProvider>
    <div className="Layout" style={layoutStyle}>
      <Header />
      <ContactModal />
      <div className="Content" style={contentStyle}>
        {props.children}
      </div>
      <NavBar />
    </div>
  </ContextProvider>

);

export default Layout;