import React from "react";
import Sidebar from "./Sidebar";

const FormPreview = ({form}) => {
  return (
    <div>
        <Sidebar form={form}/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        FormPreview
      </div>
    </div>
  );
};

export default FormPreview;
