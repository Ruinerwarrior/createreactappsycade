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
    value: '/actions/index.ts', 
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
    value: '/types/actions/index.ts', 
    reqconditions: ['asyncactions'], 
    conditions:[] 
  },
	{ 
    fileName: 'types/state/index.ts', 
    value: '/types/state/index.ts', 
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
    value: '/api/BaseApi.ts', 
    reqconditions: ['api'], 
    conditions:[] 
  },

	//components folder
	{ 
    fileName: 'components/Layout/index.tsx', 
    value: '/components/Layout/Layout.tsx', 
    reqconditions: [], 
    conditions:[] 
	},
	{ 
    fileName: 'components/Layout/index.tsx', 
    value: '/components/Layout/LayoutWithRouter.tsx', 
    reqconditions: ['routes'], 
    conditions:[] 
	},
	{ 
    fileName: 'components/Header/index.tsx', 
    value: '/components/Header/Header.tsx', 
    reqconditions: [], 
    conditions:[] 
  },
	//containers folder
  { 
    fileName: 'containers/App/index.tsx', 
    value: '/containers/App/App.tsx', 
    reqconditions: [],
    conditions:[] 
	},
	{ 
    fileName: 'containers/App/index.tsx', 
    value: '/containers/App/AppWithRedux.tsx', 
    reqconditions: ['redux'],
    conditions:[] 
  },

	//pages folder
	{ 
    fileName: 'pages/Home/index.tsx', 
    value: '/pages/Home/index.tsx', 
    reqconditions: [], 
    conditions:[] 
  },

	//reducers folder
	{ 
    fileName: 'reducers/asyncActionPayloadReducer.ts', 
    value: '/reducers/asyncActionPayloadReducer.ts', 
    reqconditions: ['redux', 'asyncactions'], 
    conditions:[] 
  },
	{ 
    fileName: 'reducers/asyncActionReducer.ts', 
    value: '/reducers/asyncActionReducer.ts', 
    reqconditions: ['redux','asyncactions'], 
    conditions:[] 
  },
	{ 
    fileName: 'reducers/asyncActionStatusReducer.ts', 
    value: '/reducers/asyncActionStatusReducer.ts', 
    reqconditions: ['redux', 'asyncactions'], 
    conditions:[] 
  },
	{ 
    fileName: 'reducers/index.ts', 
    value: '/reducers/index.ts', 
    reqconditions: ['redux'], 
    conditions:[] 
  },

  
	//src folder
	{ 
    fileName: 'store.ts', 
    value: '/store.ts', 
    reqconditions: ['redux'], 
    conditions:[] 
  },
	{ 
    fileName: 'index.tsx', 
    value: '/index.tsx', 
    reqconditions: [], 
    conditions:[] 
  },
];
