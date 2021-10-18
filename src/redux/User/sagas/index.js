import { fork } from 'redux-saga/effects';

import categorySaga from './category.saga';

export default function* mySaga() {
  yield fork(categorySaga);
}
