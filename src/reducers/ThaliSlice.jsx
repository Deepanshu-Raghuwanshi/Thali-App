import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemName: "Chapati",
  chapati: 0,
  chapatiPrice: 25,
  itemName2: "Pickle",
  pickle: 0,
  picklePrice: 120,
  itemName3: "Curd",
  curd: 0,
  curdPrice: 150,
  itemName4: "Sweet",
  sweet: 0,
  sweetPrice: 200,
  itemName5: "Daal",
  daal: 0,
  daalPrice: 270,
  itemName6: "Paneer Dish",
  paneer: 0,
  paneerPrice: 350,
};

export const thaliSlice = createSlice({
  name: "thali",
  initialState,
  reducers: {
    chapatiQuantity: (state) => {
      state.chapati += 1;
    },
    pickleQuantity: (state) => {
      state.pickle += 1;
    },
    curdQuantity: (state) => {
      state.curd += 1;
    },
    sweetQuantity: (state) => {
      state.sweet += 1;
    },
    daalQuantity: (state) => {
      state.daal += 1;
    },
    paneerQuantity: (state) => {
      state.paneer += 1;
    },
    reset: (state) => {
      state.paneer = 0;
      state.daal = 0;
      state.sweet = 0;
      state.curd = 0;
      state.pickle = 0;
      state.chapati = 0;
    },
    chapatiReset: (state) => {
      state.chapati = 0;
    },
    pickelReset: (state) => {
      state.pickle = 0;
    },
    curdReset: (state) => {
      state.curd = 0;
    },
    sweetReset: (state) => {
      state.sweet = 0;
    },
    daalReset: (state) => {
      state.daal = 0;
    },
    paneerReset: (state) => {
      state.paneer = 0;
    },

    chapatiSub: (state) => {
      state.chapati -= 1;
    },
    pickelSub: (state) => {
      state.pickle -= 1;
    },
    curdSub: (state) => {
      state.curd -= 1;
    },
    sweetSub: (state) => {
      state.sweet -= 1;
    },
    daalSub: (state) => {
      state.daal -= 1;
    },
    paneerSub: (state) => {
      state.paneer -= 1;
    },
  },
});

export const {
  chapatiQuantity,
  pickleQuantity,
  curdQuantity,
  sweetQuantity,
  daalQuantity,
  paneerQuantity,
  reset,
  chapatiReset,
  pickelReset,
  curdReset,
  sweetReset,
  daalReset,
  paneerReset,
  chapatiSub,
  pickelSub,
  curdSub,
  sweetSub,
  daalSub,
  paneerSub,
} = thaliSlice.actions;

export default thaliSlice.reducer;
