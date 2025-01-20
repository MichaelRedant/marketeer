import React from "react";
import { Admin, Resource } from "react-admin";
import customDataProvider from "../customDataProvider";
import Dashboard from "./Dashboard";

// Componenten voor Resources
import { MessageList } from "./resources/MessagesAdmin";
import { ProjectList, ProjectEdit, ProjectCreate } from "./resources/ProjectsAdmin";
import { ServiceList, ServiceEdit, ServiceCreate } from "./resources/ServicesAdmin";


const AdminPanel = () => (
  <Admin
    basename="/admin" // Zorgt dat alle resources onder `/admin` vallen
    dataProvider={customDataProvider}
    dashboard={Dashboard}
  >
    {/* Resource: Messages */}
    <Resource 
      name="messages" 
      options={{ label: "Berichten" }} 
      list={MessageList} 
    />

    {/* Resource: Projects */}
    <Resource
      name="projects"
      options={{ label: "Projecten" }}
      list={ProjectList}
      edit={ProjectEdit}
      create={ProjectCreate}
    />

    {/* Resource: Services Admin */}
    <Resource
      name="services-admin" // Aangepaste slug voor backend
      options={{ label: "Diensten Beheer" }}
      list={ServiceList}
      edit={ServiceEdit}
      create={ServiceCreate}
    />
  </Admin>
);



export default AdminPanel;
