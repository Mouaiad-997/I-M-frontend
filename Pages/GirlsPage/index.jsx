import React, { useState, useEffect } from "react";
import BaseSpinner from "../../Base/BaseSpinner.jsx";
import GirlsPageFinal from "./Components/GirlsPageFinal.jsx";
import { css } from "@emotion/core";
const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding: 100px;
`;
const GirlsPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {loading ? (
        <BaseSpinner
          css={override}
          color={"#2980b9"}
          loading={loading}
          size={50}
        />
      ) : (
        <GirlsPageFinal />
      )}
    </div>
  );
};
export default GirlsPage;
