import React, { useState } from "react";
import CenterCol from "./CenterCol";
import DropDownBtn from "./DropDownBtn";
import DropDownContent from "./DropDownContent";
import DropMe from "./DropMe";
import selects from "../../utils/chartDtopDownData";

const DropDown = ({ setSelectBox, selectBox }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleChangeSelect = (item) => {
    setSelectBox(item);
  };
  const dropdownToggle = () => {
    setIsDropdownOpen((prevRes) => !prevRes);
  };
  return (
    <CenterCol>
      <DropMe onClick={dropdownToggle}>
        <DropDownBtn>{selectBox.label}</DropDownBtn>
        {isDropdownOpen && (
          <DropDownContent>
            {selects.map((item) => (
              <li key={item.id} onClick={() => handleChangeSelect(item)}>
                {item.label}
              </li>
            ))}
          </DropDownContent>
        )}
      </DropMe>
    </CenterCol>
  );
};
export default DropDown;
