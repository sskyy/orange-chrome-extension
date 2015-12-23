import React from 'react';
import 'todomvc-app-css/index.css';

chrome.storage.local.get('state', (obj) => {

  React.render(
    <div />,
    document.querySelector('#root')
  );
});