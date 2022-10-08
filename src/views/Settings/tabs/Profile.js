import Select from "components/Form/Select";
import Text from "components/Form/Text";
import React from "react";
import { Col, Row } from "reactstrap";
import countryList from "utils/countryList";
import timezone from "utils/timezones";
import languages from "../../../utils/languages";
const Profile = ({ data }) => {
  const finallang = Object.keys(languages).map((item, index) => ({
    value: item,
    label: languages[item].nativeName,
  }));
  return (
    <>
      <br />
      <br />
      <Row>
        <Col lg={5}>
          <Text text="FULL NAME" name="full-name" />
          <Select
            options={finallang}
            text="LANGUAGE"
            default={data?.language || "en"}
          ></Select>
          <Select
            options={timezone}
            text="TIMEZONE"
            default={data?.timezone || "UTC"}
          ></Select>
        </Col>
        <Col lg={6}>
          {" "}
          <Text text="EMAIL ADDRESS" name="email" />{" "}
          <Select
            options={countryList}
            text="COUNTRY"
            default={data?.country || "US"}
          ></Select>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </>
  );
};
export default Profile;
