import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Header from "../Header/Header";
import routes from "./../../routes/routes.json";
import { reset } from "../../reducers/ThaliSlice";

const Checkout = () => {
  const dispatch = useDispatch();

  const chappatiQuantity = useSelector((state) => {
    return state.thali.chapati;
  });
  const pickelQuantity = useSelector((state) => {
    return state.thali.pickle;
  });
  const curdQuantity = useSelector((state) => {
    return state.thali.curd;
  });
  const sweetQuantity = useSelector((state) => {
    return state.thali.sweet;
  });
  const daalQuantity = useSelector((state) => {
    return state.thali.daal;
  });
  const paneerQuantity = useSelector((state) => {
    return state.thali.paneer;
  });

  const chapatiPricee = useSelector((state) => {
    return state.thali.chapatiPrice;
  });
  const pickelPricee = useSelector((state) => {
    return state.thali.picklePrice;
  });
  const curdPricee = useSelector((state) => {
    return state.thali.curdPrice;
  });
  const sweetPricee = useSelector((state) => {
    return state.thali.sweetPrice;
  });
  const daalPricee = useSelector((state) => {
    return state.thali.daalPrice;
  });
  const paneerPricee = useSelector((state) => {
    return state.thali.paneerPrice;
  });

  const itemName1 = useSelector((state) => {
    return state.thali.itemName;
  });
  const itemName2 = useSelector((state) => {
    return state.thali.itemName2;
  });
  const itemName3 = useSelector((state) => {
    return state.thali.itemName3;
  });
  const itemName4 = useSelector((state) => {
    return state.thali.itemName4;
  });
  const itemName5 = useSelector((state) => {
    return state.thali.itemName5;
  });
  const itemName6 = useSelector((state) => {
    return state.thali.itemName6;
  });

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/thali");
  };

  const orderHandler = () => {
    alert(`CONFIRM YOUR ORDER AMOUNT IS ${netAmount} Rs `);
    alert("YOUR ORDER IS ON WAY");
    setTimeout(() => {
      navigate("/thali");
    }, 2000);
    alert("THNX FOR VISITING US");
    dispatch(reset());
  };

  const chapatiAmount = chapatiPricee * chappatiQuantity;
  const pickelAmount = pickelPricee * pickelQuantity;
  const curdAmount = curdPricee * curdQuantity;
  const sweetAmount = sweetPricee * sweetQuantity;
  const daalAmount = daalPricee * daalQuantity;
  const paneerAmount = paneerPricee * paneerQuantity;

  const netAmount =
    chapatiAmount +
    pickelAmount +
    curdAmount +
    sweetAmount +
    daalAmount +
    paneerAmount;

  return (
    <>
      <div>
        <h2>Your Checkout Summary</h2>
      </div>
      <div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Item Quantity</th>
              <th>Item Price</th>
              <th>Item Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {chappatiQuantity > 0 && (
              <tr>
                <td>.</td>
                <td>{itemName1}</td>
                <td>{chappatiQuantity}</td>
                <td>{chapatiPricee} Rs</td>
                <td>{chapatiAmount} Rs</td>
              </tr>
            )}
            {pickelQuantity > 0 && (
              <tr>
                <td>.</td>
                <td>{itemName2}</td>
                <td>{pickelQuantity}</td>
                <td>{pickelPricee} Rs</td>
                <td> {pickelAmount} Rs</td>
              </tr>
            )}
            {curdQuantity > 0 && (
              <tr>
                <td>.</td>
                <td>{itemName3}</td>
                <td>{curdQuantity}</td>
                <td>{curdPricee} Rs</td>
                <td>{curdAmount} Rs</td>
              </tr>
            )}
            {sweetQuantity > 0 && (
              <tr>
                <td>.</td>
                <td>{itemName4}</td>
                <td>{sweetQuantity}</td>
                <td>{sweetPricee} Rs</td>
                <td>{sweetAmount} Rs</td>
              </tr>
            )}
            {daalQuantity > 0 && (
              <tr>
                <td>.</td>
                <td>{itemName5}</td>
                <td>{daalQuantity}</td>
                <td>{daalPricee} Rs</td>
                <td>{daalAmount} Rs</td>
              </tr>
            )}
            {paneerQuantity > 0 && (
              <tr>
                <td>.</td>
                <td>{itemName6}</td>
                <td>{paneerQuantity}</td>
                <td>{paneerPricee} Rs</td>
                <td>{paneerAmount} Rs</td>
              </tr>
            )}
            <tr>
              <td> Total Thali Amount</td>

              <td colSpan={3}></td>
              <td>{netAmount} Rs</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <Button className="me-3" onClick={navigateHandler} variant="dark">
          Go To Thali{" "}
        </Button>
        <Button onClick={orderHandler} variant="warning">
          Order Thali
        </Button>
      </div>
      <div>
        <h3 className="mt-3">ENJOY YOUR MEAL</h3>
      </div>
    </>
  );
};
export default Checkout;
