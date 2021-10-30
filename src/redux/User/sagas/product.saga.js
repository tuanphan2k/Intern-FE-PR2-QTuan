import { put, takeEvery } from "redux-saga/effects";
import { deleteItemCase, productCase, productItemCase } from "../constants";
import productApi from "../../../API/productApi";

function* getProductListSaga(action) {
  const params = action.payload;
  try {
    const result = yield productApi.getProductList(params);
    yield put({
      type: productCase.sucess,
      payload: {
        data: result.data,
        total: result.total,
      },
    });
  } catch (e) {
    yield put({
      type: productCase.fail,
      payload: {
        error: e.error,
      },
    });
  }
}

function* getProductItemSaga(action) {
  const params = action.payload;
  try {
    const result = yield productApi.getProductItem(params);
    yield put({
      type: productItemCase.sucess,
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: productItemCase.fail,
      payload: {
        error: e.error,
      },
    });
  }
}

function* deleteProductItemSaga(action) {
  const params = action.payload;
  try {
    const result = yield productApi.deleteProductItem(params);
    yield put({
      type: deleteItemCase.sucess,
      payload: {
        data: params,
      },
    });
  } catch (e) {
    yield put({
      type: deleteItemCase.fail,
      payload: {
        error: e.error,
      },
    });
  }
}

export default function* productSaga() {
  yield takeEvery(productCase.req, getProductListSaga);
  yield takeEvery(productItemCase.req, getProductItemSaga);
  yield takeEvery(deleteItemCase.req, deleteProductItemSaga);
}
