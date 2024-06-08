import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import { Context } from "../context/MainContext";
import { fetchUser } from "../api/apiCalls";
import { userFetchSuccess } from "../context/Action";
import { fetchRequest } from "../api/RequestMain";
import Loader from "../components/Loader";

const MainLayout = () => {
  const { dispatch } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user")) || null;

  useEffect(() => {
    if (!user?._id) {
      const apiCall = fetchUser();
      const onSucess = (res) => {
        dispatch(userFetchSuccess(res.data));
      };

      fetchRequest(setLoading, onSucess, apiCall);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="mainLayout">
      {loading ? (
        <Loader />
      ) : (
        <>
          <TopBar />
          <div className="mainLayout__main">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default MainLayout;
