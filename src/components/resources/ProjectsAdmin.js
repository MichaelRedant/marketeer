// File: src/components/resources/Projects.js
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  SimpleForm,
  TextInput,
  Edit,
  Create,
} from "react-admin";

// Project List
export const ProjectList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="title" label="Titel" />
      <TextField source="description" label="Beschrijving" />
      <TextField source="category" label="Categorie" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Project Edit
export const ProjectEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" label="Titel" />
      <TextInput source="description" label="Beschrijving" />
      <TextInput source="category" label="Categorie" />
    </SimpleForm>
  </Edit>
);

// Project Create
export const ProjectCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Titel" />
      <TextInput source="description" label="Beschrijving" />
      <TextInput source="category" label="Categorie" />
    </SimpleForm>
  </Create>
);
