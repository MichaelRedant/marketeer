// File: src/components/resources/MessagesAdmin.js
import React from "react";
import { List, Datagrid, TextField, DateField, DeleteButton } from "react-admin";

export const MessageList = (props) => (
  <List {...props} perPage={10}>
    <Datagrid>
      <TextField source="name" label="Naam" />
      <TextField source="email" label="E-mail" />
      <TextField source="message" label="Bericht" />
      <TextField source="services" label="Diensten" />
      <DateField source="createdAt" label="Datum" />
      <DeleteButton />
    </Datagrid>
  </List>
);
