import React from "react";
import { ContactsSection } from "../components";

const ContactsPage: React.FC = () => {
  return (
    <main style={{paddingBottom:'100px'}} className="contacts-page app-content">
      <ContactsSection />
    </main>
  );
};

export default ContactsPage;
