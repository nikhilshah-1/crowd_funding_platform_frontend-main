import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import NavBar from "../Components/navbar_Landing";
import ImageLanding from "../Components/image_landing";
import OnGoingCampaigns from "../Components/onGoingCampaigns";
import WhyUs from "../Components/whyUsSection";
import NobelCauseComponent from "../Components/nobelCauseComponent";
import ProudToDonate from "../Components/proudToDonateComponent";
import ScrollToTop from "../Components/scrollToTop";
import { getAllCampaigns } from "../services/campaign";
import { compare } from "../utills/math";

const LandingPage = ({ history }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, err } = await getAllCampaigns();
        if (err) {
          throw err;
        }
        // Sort and limit the data to 4 campaigns
        const sortedData = data.sort(compare);
        setData(sortedData.slice(0, 4));
      } catch (error) {
        // Handle errors
        const errorMessage =
          error.response?.data?.message || "Something went wrong";
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = (campaignId) => {
    history.push(`/campaign/${campaignId}`);
  };

  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      <ImageLanding />
      <WhyUs />
      <OnGoingCampaigns
        handleClick={handleClick}
        data={data}
        loading={loading}
      />
      <NobelCauseComponent />
      <ProudToDonate />
    </React.Fragment>
  );
};

export default LandingPage;