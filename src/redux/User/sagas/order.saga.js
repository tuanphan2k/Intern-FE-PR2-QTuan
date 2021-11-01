import { put, takeEvery } from "redux-saga/effects";
import { addToOrderCase } from "../constants";
import orderApi from "../../../API/orderApi";

function* addToOrderSaga(action) {
  const params = action.payload;
  try {
    const result = yield orderApi.addToOrder(params);
    yield put({
      type: addToOrderCase.sucess,
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: addToOrderCase.fail,
      payload: {
        error: e.error,
      },
    });
  }
}

export default function* authSaga() {
  yield takeEvery(addToOrderCase.req, addToOrderSaga);
}
