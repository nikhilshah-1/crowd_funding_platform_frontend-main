import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.js";

// Set default authorization header
axios.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem("token")}`;

// Fetch all campaigns
export const getAllCampaigns = async () => {
  try {
    const response = await axios.get(config.getAllCampaignsUrl());
    return { data: response.data, err: undefined };
  } catch (error) {
    return { data: [], err: error };
  }
};

// Fetch a specific campaign by ID
export const getCampaignData = async (id) => {
  try {
    const response = await axios.get(config.getCampaignDataByIdUrl(id));
    return { data: response.data, err: undefined };
  } catch (error) {
    return { data: {}, err: error };
  }
};

// Create a new campaign
export const newCampaign = async (data, navigate) => {
  try {
    const response = await axios.post(config.createNewCampaignUrl(), data);
    navigate(`/campaign/${response.data._id}`); // Use navigate instead of history.push()
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};

// Update an existing campaign
export const updateCampaign = async (id, data, navigate) => {
  try {
    const response = await axios.put(config.updateCampaignUrl(id), data);
    navigate(`/campaign/${response.data._id}`); // Use navigate
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};

// Delete a campaign
export const deleteCampaign = async (id, navigate) => {
  try {
    await axios.delete(config.deleteCampaignUrl(id));
    toast.success("Campaign deleted successfully!");
    navigate("/"); // Redirect to home page after deletion
  } catch (error) {
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};
