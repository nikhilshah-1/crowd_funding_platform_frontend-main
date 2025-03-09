import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom"; // Use useHistory instead of useNavigate
import { toast } from "react-toastify";
import NavBar from "../Components/navbar_notLanding";
import ProgressBar from "../Components/progressBar";
import Donated from "../Components/donors";
import FloatBtn from "../Components/campaignFloatingBtns";
import Loader from "../Components/loaderFullPage";
import ScrollToTop from "../Components/scrollToTop";
import { isNormalInteger } from "../utills/math";
import { getCampaignData, deleteCampaign } from "../services/campaign";
import { isAuthorised } from "../services/auth";
import styles from "../Components/styles/campaign.module.css";

const Campaign = () => {
  const { id } = useParams(); // Get campaign ID from URL
  const history = useHistory(); // Use useHistory() for navigation
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState("");

  const handleAmountChange = (e) => {
    if (e.target.value === "" || isNormalInteger(e.target.value)) {
      setAmount(e.target.value);
    }
  };

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const { data } = await getCampaignData(id);
        setCampaign(data);
      } catch (err) {
        console.error("Error fetching campaign:", err);
        history.replace("/page-not-found"); // Use history.replace() instead of navigate()
        toast.error(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id, history]);

  const handleEdit = () => {
    history.push(`/admin/campaign/${id}/edit`); // Use history.push()
  };

  const handleDelete = async () => {
    try {
      await deleteCampaign(id);
      toast.success("Campaign deleted successfully!");
      history.push("/campaigns"); // Redirect after deletion
    } catch (err) {
      toast.error("Failed to delete campaign");
      console.error(err);
    }
  };

  if (loading) return <Loader />;
  if (!campaign) return null; // Prevent errors if campaign data is undefined

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <FloatBtn campaign={campaign} />
      <div className={`col-md-10 col-11 m-auto py-2 ${styles.container}`}>
        {campaign.isActivated === false && (
          <div className="alert alert-warning" role="alert">
            <b>Warning:</b> This campaign is deactivated. Please contact the admin for more information.
          </div>
        )}

        {isAuthorised() && (
          <div className="mb-3">
            <button onClick={handleEdit} className="btn btn-warning mx-2">
              Edit
            </button>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        )}

        <div className="row">
          <div className="col-lg-6 col-md-5">
            <div className={styles.img}>
              <img className={styles.image} src={campaign.imageUrl} alt={campaign.title} />
            </div>
          </div>
          <div className={`col-lg-6 col-md-7 p-2 m-auto ${styles.info}`}>
            <div className={styles.header}>
              <h2 className={styles.title}>{campaign.title}</h2>
              {campaign.subTitle ? (
                <p className={styles.subtitle}>- {campaign.subTitle}</p>
              ) : (
                <div className={styles.divider}></div>
              )}
            </div>
            <ProgressBar
              fundRequired={campaign.required}
              fundRaised={campaign.raised}
              id={id}
              amount={amount}
              onAmountChange={handleAmountChange}
              isActivated={campaign.isActivated}
            />
          </div>
        </div>

        <p className={styles.description}>{campaign.description}</p>
        <hr />
        <Donated data={campaign.donors} num={campaign.donorsNum} />
      </div>
    </>
  );
};

export default Campaign;
