import React from "react";
import styles from "./Thali.module.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import {
  chapatiQuantity,
  daalQuantity,
  pickleQuantity,
  paneerQuantity,
  sweetQuantity,
  curdQuantity,
  reset,
  chapatiReset,
  pickelReset,
  curdReset,
  daalReset,
  paneerReset,
  sweetReset,
  chapatiSub,
  pickelSub,
  curdSub,
  daalSub,
  paneerSub,
  sweetSub,
} from "../../reducers/ThaliSlice";
import Header from "../Header/Header";
import { useNavigate } from "react-router";
import routes from "./../../routes/routes.json";

const Thali = () => {
  const navigate = useNavigate();

  const name = useSelector((state) => {
    // console.log(state)
    return state.thali.itemName;
  });
  const name2 = useSelector((state) => {
    return state.thali.itemName2;
  });
  const name3 = useSelector((state) => {
    return state.thali.itemName3;
  });
  const name4 = useSelector((state) => {
    return state.thali.itemName4;
  });
  const name5 = useSelector((state) => {
    return state.thali.itemName5;
  });
  const name6 = useSelector((state) => {
    return state.thali.itemName6;
  });

  let chappatiQuantity1 = useSelector((state) => {
    return state.thali.chapati;
  });

  let pickelQuantity1 = useSelector((state) => {
    return state.thali.pickle;
  });
  let curdQuantity1 = useSelector((state) => {
    return state.thali.curd;
  });
  let sweetQuantity1 = useSelector((state) => {
    return state.thali.sweet;
  });
  let daalQuantity1 = useSelector((state) => {
    return state.thali.daal;
  });
  let paneerQuantity1 = useSelector((state) => {
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

  const dispatch = useDispatch();

  const clickHandle = () => {
    dispatch(chapatiQuantity());
  };

  const clickHandle2 = () => {
    dispatch(pickleQuantity());
  };

  const clickHandle3 = () => {
    dispatch(curdQuantity());
  };

  const clickHandle4 = () => {
    dispatch(sweetQuantity());
  };

  const clickHandle5 = () => {
    dispatch(daalQuantity());
  };

  const clickHandle6 = () => {
    dispatch(paneerQuantity());
  };

  const totalItem =
    chappatiQuantity1 +
    pickelQuantity1 +
    curdQuantity1 +
    sweetQuantity1 +
    daalQuantity1 +
    paneerQuantity1;

  const checkoutHandler = () => {
    const items = [
      chappatiQuantity1,
      pickelQuantity1,
      curdQuantity1,
      sweetQuantity1,
      daalQuantity1,
      paneerQuantity1,
    ];
    const uniqueItems = items.filter((item) => item > 0);
    if (uniqueItems.length >= 2) {
      navigate("/checkout");
    } else {
      alert(
        "Minimum 2 different items required in the Thali to proceed with the checkout."
      );
    }
  };

  const thaliResetHandler = () => {
    dispatch(reset());
  };

  const chapatiRemove = () => {
    dispatch(chapatiReset());
  };
  const pickelRemove = () => {
    dispatch(pickelReset());
  };
  const curdRemove = () => {
    dispatch(curdReset());
  };
  const sweetRemove = () => {
    dispatch(sweetReset());
  };
  const daalRemove = () => {
    dispatch(daalReset());
  };
  const paneerRemove = () => {
    dispatch(paneerReset());
  };

  const chapatiSub1 = () => {
    dispatch(chapatiSub());
  };
  const pickelSub1 = () => {
    dispatch(pickelSub());
  };
  const curdSub1 = () => {
    dispatch(curdSub());
  };
  const sweetSub1 = () => {
    dispatch(sweetSub());
  };
  const daalSub1 = () => {
    dispatch(daalSub());
  };
  const paneerSub1 = () => {
    dispatch(paneerSub());
  };

  return (
    <>
      <div>
        <div className={styles.text1}>Items On Your Thali</div>
        <div className={styles.thaliItem}>
          {chappatiQuantity1 > 0 && (
            <div>
              {chappatiQuantity1} -{" "}
              <img
                className={styles.image1}
                src="https://spicecravings.com/wp-content/uploads/2020/12/Roti-3-768x1152.jpg"
                alt="Chapati"
              />
              <br />
              <Button onClick={chapatiRemove} variant="light">
                <i class="bi bi-x-octagon-fill"></i>{" "}
              </Button>
            </div>
          )}

          {pickelQuantity1 > 0 && (
            <div>
              {pickelQuantity1} -{" "}
              <img
                className={styles.image1}
                src="https://assets.vogue.in/photos/5edddd0754c8cbd19bec6e0b/2:3/w_1920,c_limit/Pickle%20recipes.jpg"
              />
              <br />
              <Button onClick={pickelRemove} variant="light">
                <i class="bi bi-x-octagon-fill"></i>{" "}
              </Button>
            </div>
          )}

          {curdQuantity1 > 0 && (
            <div>
              {curdQuantity1} -{" "}
              <img
                className={styles.image1}
                src="https://blog-live.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/08/08151441/curd1.webp"
              />
              <br />
              <Button onClick={curdRemove} variant="light">
                <i class="bi bi-x-octagon-fill"></i>{" "}
              </Button>
            </div>
          )}

          {sweetQuantity1 > 0 && (
            <div>
              {sweetQuantity1} -{" "}
              <img
                className={styles.image1}
                src="https://t4.ftcdn.net/jpg/02/54/92/05/240_F_254920579_xOIyVqIWxgUi0fSQ8FwBC95YlIVZpuCd.jpg"
              />
              <br />
              <Button onClick={sweetRemove} variant="light">
                <i class="bi bi-x-octagon-fill"></i>{" "}
              </Button>
            </div>
          )}

          {daalQuantity1 > 0 && (
            <div>
              {daalQuantity1} -{" "}
              <img
                className={styles.image1}
                src="https://kfoods.com/images1/newrecipeicon/khatti-moong-masoor-ki-daal_9260.jpg"
              />
              <br />
              <Button onClick={daalRemove} variant="light">
                <i class="bi bi-x-octagon-fill"></i>{" "}
              </Button>
            </div>
          )}

          {paneerQuantity1 > 0 && (
            <div>
              {paneerQuantity1} -{" "}
              <img
                className={styles.image1}
                src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-curry-recipe.jpg"
              />
              <br />
              <Button onClick={paneerRemove} variant="light">
                <i class="bi bi-x-octagon-fill"></i>{" "}
              </Button>
            </div>
          )}
        </div>
        <div>
          <Button
            disabled={totalItem === 0}
            onClick={thaliResetHandler}
            className="mb-3 mt-3"
          >
            Reset Thali
          </Button>
        </div>
      </div>

      <div className={styles.menu}>
        <div className={styles.text}>Today's Menu</div>

        <div className={styles.all}>
          <div className={styles.common}>
            <img
              className={styles.image}
              src="https://spicecravings.com/wp-content/uploads/2020/12/Roti-3-768x1152.jpg"
              alt="Chapati"
            />
            <br />
            <br />
            <p>
              <b>
                {name} - {chapatiPricee} Rs
              </b>
            </p>
            <hr />
            <Button
              variant="info"
              className={styles.button}
              onClick={clickHandle}
            >
              <i class="bi bi-plus-lg"></i>
            </Button>{" "}
            <Button
              disabled={chappatiQuantity1 <= 0}
              variant="info"
              className={styles.button}
              onClick={chapatiSub1}
            >
              <i class="bi bi-dash"></i>
            </Button>
          </div>

          <div className={styles.common}>
            <img
              className={styles.image}
              src="https://assets.vogue.in/photos/5edddd0754c8cbd19bec6e0b/2:3/w_1920,c_limit/Pickle%20recipes.jpg"
              alt="Pickle"
            />
            <br />
            <br />
            <p>
              <b>
                {name2} - {pickelPricee} Rs
              </b>
            </p>
            <hr />
            <Button
              variant="info"
              className={styles.button}
              onClick={clickHandle2}
            >
              <i class="bi bi-plus-lg"></i>
            </Button>{" "}
            <Button
              disabled={pickelQuantity1 <= 0}
              variant="info"
              className={styles.button}
              onClick={pickelSub1}
            >
              <i class="bi bi-dash"></i>
            </Button>
          </div>

          <div className={styles.common}>
            <img
              className={styles.image}
              src="https://blog-live.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2022/08/08151441/curd1.webp"
              alt="Curd"
            />
            <br />
            <br />
            <p>
              <b>
                {name3} - {curdPricee} Rs
              </b>
            </p>
            <hr />
            <Button
              variant="info"
              className={styles.button}
              onClick={clickHandle3}
            >
              <i class="bi bi-plus-lg"></i>
            </Button>{" "}
            <Button
              disabled={curdQuantity1 <= 0}
              variant="info"
              className={styles.button}
              onClick={curdSub1}
            >
              <i class="bi bi-dash"></i>
            </Button>
          </div>
        </div>
        <div className={styles.all}>
          <div className={styles.common}>
            <img
              className={styles.image}
              src="https://t4.ftcdn.net/jpg/02/54/92/05/240_F_254920579_xOIyVqIWxgUi0fSQ8FwBC95YlIVZpuCd.jpg"
              alt="Sweet"
            />
            <br />
            <br />
            <p>
              <b>
                {name4} - {sweetPricee} Rs
              </b>
            </p>
            <hr />
            <Button
              variant="info"
              className={styles.button}
              onClick={clickHandle4}
            >
              <i class="bi bi-plus-lg"></i>
            </Button>{" "}
            <Button
              disabled={sweetQuantity1 <= 0}
              variant="info"
              className={styles.button}
              onClick={sweetSub1}
            >
              <i class="bi bi-dash"></i>
            </Button>
          </div>

          <div className={styles.common}>
            <img
              className={styles.image}
              src="https://kfoods.com/images1/newrecipeicon/khatti-moong-masoor-ki-daal_9260.jpg"
              alt="Daal"
            />
            <br />
            <br />
            <p>
              <b>
                {name5} - {daalPricee} Rs
              </b>
            </p>
            <hr />
            <Button
              variant="info"
              className={styles.button}
              onClick={clickHandle5}
            >
              <i class="bi bi-plus-lg"></i>
            </Button>
            <Button
              disabled={daalQuantity1 <= 0}
              variant="info"
              className={styles.button}
              onClick={daalSub1}
            >
              <i class="bi bi-dash"></i>
            </Button>
          </div>

          <div className={styles.common}>
            <img
              className={styles.image}
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-curry-recipe.jpg"
              alt="Paneer Dish"
            />
            <br />
            <br />
            <p>
              <b>
                {name6} - {paneerPricee} Rs
              </b>
            </p>
            <hr />
            <Button
              variant="info"
              className={styles.button}
              onClick={clickHandle6}
            >
              <i class="bi bi-plus-lg"></i>
            </Button>
            <Button
              disabled={paneerQuantity1 <= 0}
              variant="info"
              className={styles.button}
              onClick={paneerSub1}
            >
              <i class="bi bi-dash"></i>
            </Button>
          </div>
        </div>
        <div>
          <Button onClick={checkoutHandler} className="mb-3 mt-3">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};
export default Thali;
