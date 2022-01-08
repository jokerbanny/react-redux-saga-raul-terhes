/* eslint-disable import/no-anonymous-default-export */
import { all } from 'redux-saga/effects'
import postsSaga from './saga/postsSaga'

export default function* () {
  yield all([postsSaga()])
}
