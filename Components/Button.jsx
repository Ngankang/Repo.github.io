"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import "bootstrap/dist/css/bootstrap.min.css";
import Seact from "../public/searc.png";
import Form from "react-bootstrap/Form";
import { IoMdSearch } from "react-icons/io";
export default function App() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <>
      <div ref={ref}>
        <div onClick={handleClick} style={{ width: "20px", cursor: "pointer" }}>
          <Image src={Seact} />
        </div>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Body>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <IoMdSearch />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                />
                <Form.Control.Feedback
                  type="invalid"
                  tooltip
                ></Form.Control.Feedback>
              </InputGroup>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    </>
  );
}
