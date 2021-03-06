import React, { useState } from 'react';
import SignIn from './SignIn';

export default () => {
  // [状態(変数), 変数を変更するための関数(ここで名前設定)] = useState(nameの初期値);
  const [name, setName] = useState('');
  console.log({ name });
  // SignInコンポーネントのblocksの１つとしてsetNameが渡ってくる
  // compornentに値を渡す => props
  return <SignIn setName={setName} />;
};
