module.exports = [

	//actions folder
	{ 
    fileName: 'actions/empty', 
    value: null, 
    reqconditions: ['redux'], 
    noconditions: [],
    conditions:[] 
  },
	{ 
    fileName: 'actions/index.ts', 
    value: 'actions.index.ts', 
    reqconditions: ['redux', 'asyncactions'], 
    noconditions: [],
    conditions:[] 
  },

	//constants folder
	{ 
    fileName: 'constants/empty', 
    value: null, 
    reqconditions: [], 
    noconditions: [],
    conditions:[] 
  },

	//types folder
	{ 
    fileName: 'types/actions/index.ts', 
    value: 'types.actions.index.ts', 
    reqconditions: ['asyncactions'], 
    noconditions: [],
    conditions:[] 
  },
	{ 
    fileName: 'types/state/index.ts', 
    value: 'types.state.index.ts', 
    reqconditions: ['asyncactions'], 
    noconditions: [],
    conditions:[] 
  },
	{ 
    fileName: 'types/empty', 
    value: null, 
    reqconditions: [], 
    noconditions: [],
    conditions:[] 
  },
  
	//utils folder
	{ 
    fileName: 'utils/empty', 
    value: null, 
    reqconditions: [], 
    noconditions: [],
    conditions:[] 
  },

	//api folder
	{ 
    fileName: 'api/BaseApi.ts', 
    value: 'api.BaseApi.ts', 
    reqconditions: ['api'], 
    noconditions: [],
    conditions:[] 
  },

	//components folder
	{ 
    fileName: 'components/Layout/index.tsx', 
    value: 'components.Layout.index.tsx', 
    reqconditions: [], 
    noconditions: ['routes'],
    conditions:[] 
	},
	{ 
    fileName: 'components/Layout/index.tsx', 
    value: 'components.Layout.LayoutWithRouter.index.tsx', 
    reqconditions: ['routes'], 
    noconditions: [],
    conditions:[] 
  },
  { 
    fileName: 'components/NavBar/index.tsx', 
    value: 'components.NavBar.NavBarWithSass.index.tsx', 
    reqconditions: ['sass'], 
    noconditions: ['bulma'],
    conditions:[] 
  },
	{ 
    fileName: 'components/NavBar/index.tsx', 
    value: 'components.NavBar.NavBarWithBulma.index.tsx', 
    reqconditions: ['bulma'], 
    noconditions: [],
    conditions:[] 
  },
  { 
    fileName: 'components/NavBar/index.tsx', 
    value: 'components.NavBar.index.tsx', 
    reqconditions: [], 
    noconditions: ['bulma', 'sass'],
    conditions:[] 
  },
  { 
    fileName: 'components/NavBar/NavBar.module.css', 
    value: 'components.NavBar.NavBar.module.css', 
    reqconditions: [], 
    noconditions: ['bulma', 'sass'],
    conditions:[] 
  },
  { 
    fileName: 'components/NavBar/NavBar.module.scss', 
    value: 'components.NavBar.NavBar.module.scss', 
    reqconditions: ['sass'], 
    noconditions: ['bulma'],
    conditions:[] 
  },
	//containers folder
  { 
    fileName: 'containers/App/index.tsx', 
    value: 'containers.App.index.tsx', 
    reqconditions: [],
    noconditions: ['redux'],
    conditions:[] 
	},
	{ 
    fileName: 'containers/App/index.tsx', 
    value: 'containers.App.AppWithRedux.index.tsx', 
    reqconditions: ['redux'],
    noconditions: [],
    conditions:[] 
  },

	//pages folder
	{ 
    fileName: 'pages/Home/index.tsx', 
    value: 'pages.Home.index.tsx', 
    reqconditions: [], 
    noconditions: [],
    conditions:[] 
  },

	//reducers folder
	{ 
    fileName: 'reducers/asyncActionPayloadReducer.ts', 
    value: 'reducers.asyncActionPayloadReducer.ts', 
    reqconditions: ['redux', 'asyncactions'], 
    noconditions: [],
    conditions:[] 
  },
	{ 
    fileName: 'reducers/asyncActionReducer.ts', 
    value: 'reducers.asyncActionReducer.ts', 
    reqconditions: ['redux','asyncactions'], 
    noconditions: [],
    conditions:[] 
  },
	{ 
    fileName: 'reducers/asyncActionStatusReducer.ts', 
    value: 'reducers.asyncActionStatusReducer.ts', 
    reqconditions: ['redux', 'asyncactions'], 
    noconditions: [],
    conditions:[] 
  },
	{ 
    fileName: 'reducers/index.ts', 
    value: 'reducers.index.ts', 
    reqconditions: ['redux'], 
    noconditions: [],
    conditions:[] 
  },

  
	//src folder
	{ 
    fileName: 'store.ts', 
    value: 'src.store.ts', 
    reqconditions: ['redux'], 
    noconditions: [],
    conditions:[] 
  },
	{ 
    fileName: 'index.tsx', 
    value: 'src.index.tsx', 
    reqconditions: [], 
    noconditions: ['bulma'],
    conditions:[] 
  },
  { 
    fileName: 'index.tsx', 
    value: 'src.indexWithBulma.index.tsx', 
    reqconditions: ['bulma'], 
    noconditions: ['sass'],
    conditions:[] 
  },
  { 
    fileName: 'index.tsx', 
    value: 'src.indexWithBulmaAndSass.index.tsx', 
    reqconditions: ['bulma', 'sass'], 
    noconditions: [],
    conditions:[] 
  },
  { 
    fileName: 'index.scss', 
    value: 'src.index.scss', 
    reqconditions: ['sass', 'bulma'], 
    noconditions: [],
    conditions:[] 
  },
];
