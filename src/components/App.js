import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
// 開発用設定
import config from '../config.json';
console.log({ config });

export default () => {
  // [状態(変数), 変数を変更するための関数(ここで名前設定)] = useState(nameの初期値);
  const [name, setName] = useState('');
  
  // nameが設定されている場合、Main compornentを表示。
  if(config.signInEnabled && name === ''){
    // SignInコンポーネントのpropsの１つとしてsetNameが渡ってくる
    // compornentに値を渡す => props
    return <SignIn setName={ setName } />;
  }else{
    return <Main name={name} />;
  }
};
