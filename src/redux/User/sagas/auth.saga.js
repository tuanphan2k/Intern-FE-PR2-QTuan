import { put, takeEvery } from "redux-saga/effects";
import { loginCase, registerCase, updateUserCase } from "../constants";
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

function* loginSaga(action) {
  const params = action.payload;
  try {
    const result = yield authApi.login(params);
    yield put({
      type: loginCase.sucess,
      payload: {
        data: result,
      },
    });
    yield history.push("/");
  } catch (e) {
    yield put({
      type: loginCase.fail,
      payload: {
        error: e.error,
      },
    });
  }
}

function* updateUserSaga(action) {
  const {
    id,
    fullName,
    gender,
    accessToken,
    birthDay,
    phone,
    nickName,
    password,
  } = action.payload;

  try {
    const result = yield authApi.updateUser(
      { id, accessToken },
      { fullName, gender, birthDay, phone, nickName, password }
    );
    yield put({
      type: updateUserCase.sucess,
      payload: {
        data: result,
      },
    });
  } catch (e) {
    yield put({
      type: updateUserCase.fail,
      payload: {
        error: e.error,
      },
    });
  }
}

export default function* authSaga() {
  yield takeEvery(registerCase.req, registerSaga);
  yield takeEvery(loginCase.req, loginSaga);
  yield takeEvery(updateUserCase.req, updateUserSaga);
}
