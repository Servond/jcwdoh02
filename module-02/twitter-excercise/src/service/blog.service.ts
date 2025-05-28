import axios from "axios";

export async function fetchBlogService() {
  try {
    const { data } = await axios.get(
      `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_API_KEY}`
    );

    return data?.items;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchBlogServiceById(id: string) {
  try {
    const { data } = await axios.get(
      `${process.env.CONTENTFUL_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/${id}?access_token=${process.env.CONTENTFUL_API_KEY}`
    );

    return data;
  } catch (err) {
    console.log(err);
  }
}
