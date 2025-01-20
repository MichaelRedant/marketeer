import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";

// Lijst van Services
export const ServiceList = (props) => {
  console.log("Props in ServiceList:", props); // Debugging
  return (
    <List {...props} title="Overzicht van Diensten">
      <Datagrid rowClick="edit">
        <TextField source="id" label="ID" />
        <TextField source="name" label="Naam" />
        <TextField source="description" label="Beschrijving" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};

// Service Bewerken
export const ServiceEdit = (props) => {
  console.log("Props in ServiceEdit:", props); // Debugging
  return (
    <Edit {...props} title="Bewerk Dienst">
      <SimpleForm>
        <TextInput source="name" label="Naam" fullWidth />
        <TextInput source="description" label="Beschrijving" fullWidth multiline />
        <TextInput source="details" label="Details" fullWidth multiline />
        <ArrayInput source="benefits" label="Voordelen">
          <SimpleFormIterator>
            <TextInput label="Voordeel" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

// Nieuwe Service Toevoegen
export const ServiceCreate = (props) => {
  console.log("Props in ServiceCreate:", props); // Debugging
  return (
    <Create {...props} title="Voeg een Dienst Toe">
      <SimpleForm>
        <TextInput source="name" label="Naam" fullWidth />
        <TextInput source="description" label="Beschrijving" fullWidth multiline />
        <TextInput source="details" label="Details" fullWidth multiline />
        <ArrayInput source="benefits" label="Voordelen">
          <SimpleFormIterator>
            <TextInput label="Voordeel" />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
