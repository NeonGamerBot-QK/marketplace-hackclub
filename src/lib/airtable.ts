import Airtable from "airtable";

export default new Airtable({
apiKey: import.meta.env.VITE_AIRTABLE_API_KEY,
})