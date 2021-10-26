import { put, takeEvery } from "redux-saga/effects";
import { registerCase } from "../constants";
import authApi from "../../../API/authApi";
import { notification } from "antd";
import history from "../../../utils/history";

function* registerSaga(action) {
  const params = action.payload;
  try {
    const result = yield authApi.register(params);
    yield put({
      type: registerCase.sucess,
      payload: {
        data: result.data,
      },
    });
    notification.success({
      message: "Đăng ký tài khoản thành công!",
    });
    yield history.push("/login");
  } catch (e) {
    yield put({
      type: registerCase.fail,
      payload: {
        error: e.error,
      },
    });
  }
}

export default function* authSaga() {
  yield takeEvery(registerCase.req, registerSaga);
}
