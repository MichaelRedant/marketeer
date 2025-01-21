import React, { useEffect, useState } from "react";
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
  SelectInput,
  CheckboxGroupInput,
} from "react-admin";
import { fetchServices } from "../../api"; // Zorg ervoor dat deze functie correct is
import tools from "../../tools.json"; // Zorg dat dit pad correct is

// Project List
export const ProjectList = (props) => (
  <List {...props} perPage={10}>
    <Datagrid>
      <TextField source="title" label="Titel" />
      <TextField source="description" label="Beschrijving" />
      <TextField source="category" label="Categorie" />
      <TextField source="opdrachtgever" label="Opdrachtgever" />
      <TextField source="eindklant" label="Eindklant" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

// Custom hook om services op te halen
const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const servicesData = await fetchServices();
        console.log("Fetched Services for Categories:", servicesData);

        // Controleer en formatteer de data
        if (Array.isArray(servicesData)) {
          setServices(
            servicesData.map((service) => ({
              id: service.name,
              name: service.name,
            }))
          );
        } else if (servicesData.data && Array.isArray(servicesData.data)) {
          setServices(
            servicesData.data.map((service) => ({
              id: service.name,
              name: service.name,
            }))
          );
        } else {
          console.error("Unexpected API response format:", servicesData);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  return { services, loading };
};

// Project Edit
export const ProjectEdit = (props) => {
  const { services, loading } = useServices();

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" label="Titel" />
        <TextInput source="description" label="Beschrijving" />
        <TextInput source="details" label="Details" />
        <TextInput source="image" label="Afbeelding URL" />
        <TextInput source="liveLink" label="Live Link" />
        <TextInput source="githubLink" label="GitHub Link" />
        <TextInput source="opdrachtgever" label="Opdrachtgever" />
        <TextInput source="eindklant" label="Eindklant" />
        <CheckboxGroupInput
          source="technologies"
          label="Gebruikte Technologieën"
          choices={tools.map((tool) => ({
            id: tool.name, // Bewaar de naam in plaats van een ID
            name: tool.name,
          }))}
        />
        <SelectInput
          source="category"
          label="Categorie"
          choices={services}
          optionValue="id"
          optionText="name"
          emptyText="Geen beschikbare categorieën"
          emptyValue=""
          isLoading={loading}
        />
      </SimpleForm>
    </Edit>
  );
};

// Project Create
export const ProjectCreate = (props) => {
  const { services, loading } = useServices();

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" label="Titel" />
        <TextInput source="description" label="Beschrijving" />
        <TextInput source="details" label="Details" />
        <TextInput source="image" label="Afbeelding URL" />
        <TextInput source="liveLink" label="Live Link" />
        <TextInput source="githubLink" label="GitHub Link" />
        <TextInput source="opdrachtgever" label="Opdrachtgever" />
        <TextInput source="eindklant" label="Eindklant" />
        <CheckboxGroupInput
          source="technologies"
          label="Gebruikte Technologieën"
          choices={tools.map((tool) => ({
            id: tool.name, // Bewaar de naam in plaats van een ID
            name: tool.name,
          }))}
        />
        <SelectInput
          source="category"
          label="Categorie"
          choices={services}
          optionValue="id"
          optionText="name"
          emptyText="Geen beschikbare categorieën"
          emptyValue=""
          isLoading={loading}
        />
      </SimpleForm>
    </Create>
  );
};
