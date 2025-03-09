import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"; // ✅ Only use useHistory() for v5
import { toast } from "react-toastify";
import NavBar from "../Components/navbar_notLanding";
import Campaign from "../Components/everyOngoingCampaigns";
import Pagination from "../Components/pagination";
import Loader from "../Components/loaderFullPage";
import ScrollToTop from "../Components/scrollToTop";
import { paginate } from "../utills/paginate";
import { getAllCampaigns } from "../services/campaign";
import { compare } from "../utills/math";
import styles from "../Components/styles/allCampaigns.module.css";

const AllCampaigns = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const history = useHistory(); // ✅ Works correctly in React Router v5

  useEffect(() => {
    let isMounted = true; // Prevent state update if component unmounts

    const fetchCampaigns = async () => {
      try {
        console.log("Fetching campaigns..."); // ✅ Debugging log
        const response = await getAllCampaigns();
        console.log("Response received:", response); // ✅ Debugging log

        if (isMounted) {
          if (response && response.data) {
            const sortedData = [...response.data].sort(compare);
            setData(sortedData);
          } else {
            throw new Error("Invalid response data");
          }
        }
      } catch (error) {
        console.error("Error fetching campaigns:", error);
        toast.error(error.response?.data?.message || "Failed to fetch campaigns");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCampaigns();

    return () => {
      isMounted = false; // Cleanup function to avoid setting state after unmount
    };
  }, []);

  const handleClick = (id) => {
    history.push(`/campaign/${id}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageSize = 6;
  const allCampaigns = paginate(data, currentPage, pageSize);

  return (
    <>
      <NavBar />
      <ScrollToTop />
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.header}>
            <p>All Campaigns</p>
          </div>
          <div className={`row ${styles.section}`}>
            {allCampaigns.length > 0 ? (
              allCampaigns.map((d) => (
                <div key={d._id} className={`col-md-6 col-12 ${styles.campaign}`}>
                  <Campaign
                    id={d._id}
                    handleClick={() => handleClick(d._id)}
                    title={d.title}
                    description={d.description}
                    image={d.imageUrl}
                    requiredAmount={d.required}
                    isActivated={d.isActivated}
                  />
                </div>
              ))
            ) : (
              <p className="text-center">No campaigns found.</p>
            )}
          </div>
          <Pagination
            itemsCount={data.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default AllCampaigns;
