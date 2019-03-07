module.exports = [
  { fileName: 'actions/empty', value: null, reqconditions: ['redux'], conditions:[] },
  { fileName: 'constants/empty', value: null, reqconditions: [], conditions:[] },
  { fileName: 'types/empty', value: null, reqconditions: [], conditions:[] },
  { fileName: 'utils/empty', value: null, reqconditions: [], conditions:[] },
  { fileName: 'index.tsx', value: require('./index.js'), reqconditions: [], conditions:[] },
  { fileName: 'api/BaseApi.ts', value: require('./api/BaseApi.js'), reqconditions: ['api'], conditions:[] },
  { fileName: 'components/Layout/index.tsx', value: require('./components/Layout.js'), reqconditions: [], conditions:[] },
  { fileName: 'containers/App/index.tsx', value: require('./containers/App.js'), reqconditions: [],conditions:[] },
  { fileName: 'store.ts', value: require('./store.js'), reqconditions: ['redux'], conditions:[] },
  { fileName: 'pages/Home/index.tsx', value: require('./pages/Home.js'), reqconditions: [], conditions:[] },
  { fileName: 'reducers/index.ts', value: require('./reducers/index.js'), reqconditions: ['redux'], conditions:[] },
];
