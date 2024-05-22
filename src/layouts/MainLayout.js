import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import { Context } from "../context/MainContext";
import { fetchUser } from "../api/main";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";
import { userFetchSuccess } from "../context/Action";

const MainLayout = () => {
  const { dispatch, user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleFeatchUser = async () => {
      if (!user._id) {
        try {
          const res = await fetchUser();
          dispatch(userFetchSuccess(res.data));
          setLoading(false);
        } catch (err) {
          setLoading(false);
          const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message ||
            err.toString();
          toast.error(message);
        }
      } else {
        setLoading(false);
      }
    };

    handleFeatchUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="mainLayout">
      {loading ? (
        <ReactLoading color="#0092ff" width={50} height={50} type="spin" />
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
