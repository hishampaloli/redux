import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { connect } from "react-redux/es/exports";
import { showLabel } from "./redux/store";

function Usage() {

    const dispatch = useDispatch();

    const handleShowLabel = (e) => {
        dispatch(showLabel(e.target.checked));
    }
    const val = useSelector((state) => state.showLabel);

  return (
    <div>
     <input type="checkbox" name="" onChange={handleShowLabel} checked={val} id="" />
    </div>
  );
}



export default Usage;
