import { fetchUtils } from "react-admin";

const apiUrl = "http://localhost:5000/api"; // Zorg dat dit de juiste API-URL is

const customDataProvider = {
  // Get a list of resources
  getList: async (resource, params) => {
    console.log("Fetching list for resource:", resource);
    try {
      const response = await fetchUtils.fetchJson(`${apiUrl}/${resource}`);
      const responseData = response.json;

      console.log("Response ontvangen in getList:", responseData);

      // Controleer of de data correct is
      if (Array.isArray(responseData)) {
        return {
          data: responseData.map((item) => ({
            id: item._id || item.id, // Zorg voor consistente IDs
            ...item,
          })),
          total: responseData.length, // Gebruik de lengte van de array als total
        };
      } else if (responseData?.data) {
        return {
          data: responseData.data.map((item) => ({
            id: item._id || item.id,
            ...item,
          })),
          total: responseData.total || responseData.data.length,
        };
      }

      throw new Error("Ongeldige API-respons ontvangen.");
    } catch (error) {
      console.error("Error in getList:", error);
      throw new Error("Kan de lijst niet ophalen");
    }
  },

  // Get a single resource
  getOne: async (resource, params) => {
    console.log("Fetching single resource:", params);
    try {
      const { json } = await fetchUtils.fetchJson(`${apiUrl}/${resource}/${params.id}`);
      return { data: json };
    } catch (error) {
      console.error("Error in getOne:", error);
      throw new Error("Kan de resource niet ophalen");
    }
  },

  // Create a resource
  create: async (resource, params) => {
    console.log("Creating resource:", params);
    try {
      const { json } = await fetchUtils.fetchJson(`${apiUrl}/${resource}`, {
        method: "POST",
        body: JSON.stringify(params.data),
      });
      return {
        data: { id: json._id || json.id, ...json }, // Voeg de data correct toe
      };
    } catch (error) {
      console.error("Error in create:", error);
      throw new Error("Kan de resource niet maken");
    }
  },

  // Update a resource
  update: async (resource, params) => {
    console.log("Updating resource:", params);
    try {
      const { json } = await fetchUtils.fetchJson(`${apiUrl}/${resource}/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(params.data),
      });
      return {
        data: { id: json._id || json.id, ...json }, // Voeg de data correct toe
      };
    } catch (error) {
      console.error("Error in update:", error);
      throw new Error("Kan de resource niet updaten");
    }
  },

  // Delete a resource
  delete: async (resource, params) => {
    console.log("Deleting resource:", params);
    try {
      await fetchUtils.fetchJson(`${apiUrl}/${resource}/${params.id}`, {
        method: "DELETE",
      });
      return { data: params.previousData };
    } catch (error) {
      console.error("Error in delete:", error);
      throw new Error("Kan de resource niet verwijderen");
    }
  },
};

export default customDataProvider;
