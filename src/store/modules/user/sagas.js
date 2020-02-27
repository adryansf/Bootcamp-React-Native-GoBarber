import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const { data } = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso.');

    yield put(updateProfileSuccess(data));
  } catch (e) {
    Alert.alert(
      'Falha na atualização ',
      'Houve um erro ao atualizar o perfil. Verifique seus dados.'
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
