import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "./Routes/landingPage";
import Campaign from "./Routes/campaign";
import LoginAdmin from "./Routes/loginAdmin";
import RegisterAdmin from "./Routes/registerAdmin";
import AdminDashboard from "./Routes/adminDashboard";
import AboutUs from "./Routes/aboutUs";
import ContactUs from "./Routes/contactUs";
import PageNotFound from "./Routes/PageNotFound";
import NewCampaign from "./Routes/newCampaign";
import AllCampaigns from "./Routes/allCampaigns";
import EditCampaign from "./Routes/editCampaign";
import DonationSuccess from "./Routes/donationSuccess";
import DonationFailure from "./Routes/donationFailure";
import Footer from "./Components/footer";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

// Custom hook for fetching data
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (isMounted) {
          setData(data);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError(error);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, error };
};

const App = () => {
  // Example usage of the custom hook
  const { data, error } = useFetchData("https://api.example.com/data");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Running...");
    }, 1000);

    return () => clearInterval(interval); // Proper cleanup
  }, []);

  return (
    <div id="page-container">
      <div id="content-wrap">
        <ToastContainer />
        <Switch>
          <Route path="/all-campaigns" exact component={AllCampaigns} />
          <Route path="/donation/success/:id" exact component={DonationSuccess} />
          <Route path="/donation/failure" exact component={DonationFailure} />
          <Route path="/campaign/:id" exact component={Campaign} />
          <Route path="/admin/login" exact component={LoginAdmin} />
          <Route path="/admin/dashboard" exact component={AdminDashboard} />
          <Route path="/admin/new" exact component={RegisterAdmin} />
          <Route path="/admin/campaign/:id/edit" exact component={EditCampaign} />
          <Route path="/admin/campaign/new" exact component={NewCampaign} />
          <Route path="/about-us" exact component={AboutUs} />
          <Route path="/contact-us" exact component={ContactUs} />
          <Route path="/page-not-found" exact component={PageNotFound} />
          <Route path="/" exact component={LandingPage} />
          <Redirect to="/page-not-found" />
        </Switch>

        {/* Display fetched data or error */}
        {error && <div>Error: {error.message}</div>}
        {data && <div>{data.name}</div>}
      </div>
      <Footer />
    </div>
  );
};

export default App;