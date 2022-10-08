import Modal from "components/Modal";
import Pricing from "components/Pricing";
import PricingHeader from "components/Pricing/PricingHeader";
import React, { useState } from "react";
const FooterModal = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("1");
  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn win_btn_padding_top"
        id="free-trail-over-show-plans"
      >
        Select Plan
      </button>
      <Modal
        open={open}
        size="xl"
        fullscreen={true}
        setOpen={setOpen}
        Header={PricingHeader}
        active={active}
        handleActive={handleActive}
      >
        <Pricing active={active} handleActive={handleActive} />
      </Modal>
    </>
  );
};
export default FooterModal;
