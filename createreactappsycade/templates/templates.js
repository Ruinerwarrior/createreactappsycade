module.exports = [

	//actions folder
	{ 
    fileName: 'actions/empty', 
    value: null, 
    reqconditions: ['redux'], 
    conditions:[] 
  },
	{ 
    fileName: 'actions/index.ts', 
    value: require('./actions/index.js'), 
    reqconditions: ['redux', 'asyncactions'], 
    conditions:[] 
  },

	//constants folder
	{ 
    fileName: 'constants/empty', 
    value: null, 
    reqconditions: [], 
    conditions:[] 
  },

	//types folder
	{ 
    fileName: 'types/actions/index.ts', 
    value: require('./types/actions/index.js'), 
    reqconditions: ['asyncactions'], 
    conditions:[] 
  },
	{ 
    fileName: 'types/state/index.ts', 
    value: require('./types/state/index.js'), 
    reqconditions: ['asyncactions'], 
    conditions:[] 
  },
	{ 
    fileName: 'types/empty', 
    value: null, 
    reqconditions: [], 
    conditions:[] 
  },
  
	//utils folder
	{ 
    fileName: 'utils/empty', 
    value: null, 
    reqconditions: [], 
    conditions:[] 
  },

	//api folder
	{ 
    fileName: 'api/BaseApi.ts', 
    value: require('./api/BaseApi.js'), 
    reqconditions: ['api'], 
    conditions:[] 
  },

	//components folder
	{ 
    fileName: 'components/Layout/index.tsx', 
    value: require('./components/Layout.js'), 
    reqconditions: [], 
    conditions:[] 
  },

	//containers folder
  { 
    fileName: 'containers/App/index.tsx', 
    value: require('./containers/App.js'), 
    reqconditions: [],
    conditions:[] 
  },

	//pages folder
	{ 
    fileName: 'pages/Home/index.tsx', 
    value: require('./pages/Home.js'), 
    reqconditions: [], 
    conditions:[] 
  },

	//reducers folder
	{ 
    fileName: 'reducers/asyncActionPayloadReducer.ts', 
    value: require('./reducers/asyncActionPayloadReducer.js'), 
    reqconditions: ['redux', 'asyncactions'], 
    conditions:[] 
  },
	{ 
    fileName: 'reducers/asyncActionReducer.ts', 
    value: require('./reducers/asyncActionReducer.js'), 
    reqconditions: ['redux','asyncactions'], 
    conditions:[] 
  },
	{ 
    fileName: 'reducers/asyncActionStatusReducer.ts', 
    value: require('./reducers/asyncActionStatusReducer.js'), 
    reqconditions: ['redux', 'asyncactions'], 
    conditions:[] 
  },
	{ 
    fileName: 'reducers/index.ts', 
    value: require('./reducers/index.js'), 
    reqconditions: ['redux'], 
    conditions:[] 
  },

  
	//src folder
	{ 
    fileName: 'store.ts', 
    value: require('./store.js'), 
    reqconditions: ['redux'], 
    conditions:[] 
  },
	{ 
    fileName: 'index.tsx', 
    value: require('./index.js'), 
    reqconditions: [], 
    conditions:[] 
  },
];
