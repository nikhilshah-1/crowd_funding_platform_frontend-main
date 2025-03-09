import React, { useEffect } from "react";
import { useHistory } from "react-router-dom"; // Use useHistory instead of useNavigate
import jwtDecode from "jwt-decode";
import NavBar from "../Components/navbar_notLanding";
import ShowQuery from "../Components/showquery";
import ScrollToTop from "../Components/scrollToTop";
import { logout, isAuthorised } from "../services/auth";
import { toast } from "react-toastify";
import styles from "../Components/styles/dashboard.module.css";
import user from "../Components/assets/admin.png";

const AdminDashboard = () => {
  const history = useHistory(); // Using useHistory instead of useNavigate

  useEffect(() => {
    if (!isAuthorised()) {
      toast.error("Not authorised");
      history.replace("/page-not-found"); // Replace with useHistory
    }
  }, [history]);

  const token = localStorage.getItem("token");
  let email = "Unknown Admin";

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      email = decodedToken.email || email;
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <div className={`col-md-10 m-auto border ${styles.container}`}>
        <img src={user} className={styles.image} alt="Admin Icon" />
        <h2 className={styles.text}>Admin Dashboard</h2>
        <b>{email}</b>
        <hr />
        <button className="btn btn-warning m-2" onClick={() => history.push("/admin/new")}>
          New Admin +
        </button>
        <button className="btn btn-warning" onClick={() => history.push("/admin/campaign/new")}>
          New Campaign
        </button>
        <button className="btn btn-primary m-2" onClick={() => history.push("/all-campaigns")}>
          All Campaigns
        </button>
        <button
          className="btn btn-danger"
          onClick={() =>
            logout().then(() => {
              history.replace("/");
            })
          }
        >
          Logout
        </button>
        <hr />
        <ShowQuery />
      </div>
    </>
  );
};

export default AdminDashboard;
