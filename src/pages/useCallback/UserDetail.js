"use strict";
import React, { useState, useEffect, useCallback ,memo } from "react";
import "../../style/Home.css";

const UserDetail =  memo( ({onSetUserData, userData}) => {
  console.log("run again _ run");
  return (
    <>
      <button className="my-button" onClick={onSetUserData}>
        update User
      </button>
      <p>Data : {userData?.value}.</p>
    </>
  );
})

export default UserDetail;
