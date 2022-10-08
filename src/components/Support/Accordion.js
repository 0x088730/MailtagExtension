import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import config from "../../config";
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  UncontrolledAccordion,
} from "reactstrap";
import { fetchStart } from "redux/Common/common.action";
import { fetchSuccess } from "redux/Common/common.action";
import { fetchError } from "redux/Common/common.action";
const Accordion = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const fetchZendesk = async () => {
      try {
        dispatch(fetchStart());
        const response = await axios.get(`${config.zendeskFAQ}`, {
          signal: controller.signal,
        });
        dispatch(fetchSuccess());
        isMounted && setData(response?.data?.data || "");
      } catch (err) {
        dispatch(fetchError("Fetch Error"));
        console.error(err);
      }
    };
    // fetchZendesk();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <>
      <UncontrolledAccordion defaultOpen="0">
        {data &&
          data?.articles?.map((item, index) => {
            return (
              <AccordionItem>
                <AccordionHeader targetId={`AccordionItem_${index}`}>
                  {item.title}
                </AccordionHeader>
                <AccordionBody accordionId={`AccordionItem_${index}`}>
                  <div
                    className="support-faq-answer shown"
                    data-q="q3"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  ></div>
                </AccordionBody>
              </AccordionItem>
            );
          })}
      </UncontrolledAccordion>
    </>
  );
};
export default Accordion;
