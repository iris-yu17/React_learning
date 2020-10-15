//  ------ React Bootstrap/ React icon -------  //
// https://github.com/eyesofkids/MFEE09/blob/main/%E9%9B%BB%E5%AD%90%E6%95%99%E6%9D%90/1014/react-boostrap.md
// App_09.tryReactBootstrap

// 導入其它的模組
import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

// import react icons
import { FaReact } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

// yarn add react-bootstrap 裝 React Bootstrap
function App(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* react icons */}
      <SiFacebook color="green" size={50} />
      <Button variant="primary">
        <FaReact /> React v16
      </Button>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// 輸出元件(函式)
export default App;
