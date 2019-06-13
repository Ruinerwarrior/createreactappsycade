
--create tables
CREATE TABLE [Steps] (
    [Id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    [Question] TEXT NOT NULL,
    [Position] INTEGER NOT NULL
);

CREATE TABLE [Conditions] (
    [Id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    [Name] TEXT NOT NULL,
    [Required] BIT NOT NULL DEFAULT 0
);

CREATE TABLE [StepConditions] (
    [Id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    [ForStep] BIT NOT NULL DEFAULT 0,
    [StepId] INTEGER NOT NULL,
    [ConditionId] INTEGER NOT NULL,
    
    CONSTRAINT [FK_StepConditions_Steps] FOREIGN KEY ([StepId]) REFERENCES [Steps]([Id]),
    CONSTRAINT [FK_StepConditions_Conditions] FOREIGN KEY ([ConditionId]) REFERENCES [Conditions]([Id])
);

CREATE TABLE [StepResults] (
    [Id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    [FileId] INTEGER,
    [PackageId] INTEGER,    
    CONSTRAINT [FK_StepResults_Files] FOREIGN KEY ([FileId]) REFERENCES [Files]([Id]),
    CONSTRAINT [FK_StepResults_Packages] FOREIGN KEY ([PackageId]) REFERENCES [Packages]([Id])
);

CREATE TABLE [Files] (
    [Id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    [Path] TEXT,
    [CONTENTS] TEXTs
);

CREATE TABLE [Packages] (
    [Id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    [Dev] BIT NOT NULL,
    [Name] TEXT
);

CREATE TABLE [StepResultConditions] (
    [Id] INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    [StepResultId] INTEGER NOT NULL,
    [ConditionId] INTEGER NOT NULL,
    CONSTRAINT [FK_StepResultConditions_StepResults] FOREIGN KEY ([StepResultId]) REFERENCES [StepResults]([Id]),
    CONSTRAINT [FK_StepResultConditions_Conditions] FOREIGN KEY ([ConditionId]) REFERENCES [Conditions]([Id])
);

--fill tables
INSERT INTO [Steps] ([Question], [Position]) VALUES ('\nDo you want to use redux with thunk?\n', 2);
INSERT INTO [Steps] ([Question], [Position]) VALUES ('\nDo you want to setup generic async actions and reducers?\n', 4);
INSERT INTO [Steps] ([Question], [Position]) VALUES ('\nDo you want to use routes?\n', 6);
INSERT INTO [Steps] ([Question], [Position]) VALUES ('\nDo you want to have a basic api setup?\n', 8);
INSERT INTO [Steps] ([Question], [Position]) VALUES ('\nDo you want to use bulma?\n', 10);
INSERT INTO [Steps] ([Question], [Position]) VALUES ('\nDo you want sass support?\n', 12);

INSERT INTO [Conditions] ([Name], [Required]) VALUES ('redux', 1);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('redux', 0);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('asyncactions', 1);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('asyncactions', 0);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('routes', 1);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('routes', 0);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('api', 1);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('api', 0);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('bulma', 1);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('bulma', 0);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('sass', 1);
INSERT INTO [Conditions] ([Name], [Required]) VALUES ('sass', 0);

INSERT INTO [StepConditions] ([StepId], [ConditionId]) VALUES (0, 0);
INSERT INTO [StepConditions] ([StepId], [ConditionId]) VALUES (1, 2);
INSERT INTO [StepConditions] ([StepId], [ConditionId]) VALUES (2, 4);
INSERT INTO [StepConditions] ([StepId], [ConditionId]) VALUES (3, 6);
INSERT INTO [StepConditions] ([StepId], [ConditionId]) VALUES (4, 8);
INSERT INTO [StepConditions] ([StepId], [ConditionId]) VALUES (5, 10);
INSERT INTO [StepConditions] ([StepId], [ConditionId]) VALUES (6, 12);

INSERT INTO [StepConditions] ([ForStep], [StepId], [ConditionId]) VALUES (1, 1, 2);
INSERT INTO [StepConditions] ([ForStep], [StepId], [ConditionId]) VALUES (1, 2, 1);

--stepresults with files
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (1, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (2, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (3, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (4, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (5, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (6, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (7, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (8, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (9, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (10, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (11, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (12, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (13, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (14, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (15, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (16, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (17, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (18, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (19, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (20, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (21, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (22, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (23, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (24, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (25, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (26, null);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (27, null);

--stepresults with packages
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 1);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 2);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 3);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 4);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 5);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 6);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 7);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 8);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 9);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 10);
INSERT INTO [StepResults] ([FileId], [PackageId]) Values (null, 11);

--stepresultconditions with files
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (1, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (2, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (2, 3);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (4, 3);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (5, 3);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (8, 7);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (9, 6);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (10, 5);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (11, 11);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (11, 10);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (12, 9);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (13, 10);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (13, 12);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (14, 10);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (14, 12);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (15, 11);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (15, 9);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (16, 2);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (17, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (19, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (19, 3);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (20, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (20, 3);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (21, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (21, 3);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (22, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (23, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (24, 10);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (24, 12);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (25, 9);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (25, 12);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (26, 9);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (26, 11);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (27, 9);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (27, 11);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (28, 10);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (28, 12);
--stepresultconditions with packages
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (29, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (30, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (31, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (32, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (33, 1);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (34, 5);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (35, 5);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (36, 5);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (37, 7);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (38, 9);
INSERT INTO [StepResultConditions] ([StepResultId], [ConditionId]) Values (39, 11);

INSERT INTO [Packages] ([Dev], [Name]) VALUES (0, 'redux');
INSERT INTO [Packages] ([Dev], [Name]) VALUES (0, 'react-redux');
INSERT INTO [Packages] ([Dev], [Name]) VALUES (0, 'redux-thunk');
INSERT INTO [Packages] ([Dev], [Name]) VALUES (1, '@types/react-redux');
INSERT INTO [Packages] ([Dev], [Name]) VALUES (1, 'redux-devtools-extension');
INSERT INTO [Packages] ([Dev], [Name]) VALUES (0, 'react-router-dom');
INSERT INTO [Packages] ([Dev], [Name]) VALUES (1, '@types/react-router-dom');
INSERT INTO [Packages] ([Dev], [Name]) VALUES (1, '@types/react-router');
INSERT INTO [Packages] ([Dev], [Name]) VALUES (0, 'axios');
INSERT INTO [Packages] ([Dev], [Name]) VALUES (0, 'bulma');
INSERT INTO [Packages] ([Dev], [Name]) VALUES (0, 'node-sass');

--actions folder
INSERT INTO [Files] ([Path], [Contents]) VALUES ('actions/empty', null);
INSERT INTO [Files] ([Path], [Contents]) VALUES ('actions/index.ts', 
'import { StartedAsyncAction, SucceededAsyncAction, FailedAsyncAction, AsyncActionStatus } from "../types/actions";

function startedAsyncAction<T>(type: T): StartedAsyncAction<T> {
	return {
		type,
		status: AsyncActionStatus.STARTED,
	};
}

function succeededAsyncAction<T, P>(type: T, payload: P): SucceededAsyncAction<T, P> {
	return {
		type,
		status: AsyncActionStatus.SUCCEEDED,
		payload,
	};
}

function failedAsyncAction<T>(type: T, error: Error): FailedAsyncAction<T> {
	return {
		type,
		status: AsyncActionStatus.FAILED,
		payload: error,
	};
}

export function async<T, P>(type: T, action: (...args: any[]) => Promise<P>, ...args: any[]) {
	return async (dispatch: any) => {
		dispatch(startedAsyncAction(type));
		try {
			const payload = await action(...args);
			dispatch(succeededAsyncAction(type, payload));
		} catch (error) {
			dispatch(failedAsyncAction(type, error));
		}
	};
}
');
--constants folder
INSERT INTO [Files] ([Path], [Contents]) VALUES ('constants/empty', null);

--types folder
INSERT INTO [Files] ([Path], [Contents]) VALUES ('types/actions/index.ts', 
'export enum AsyncActionStatus {
	UNSTARTED = "UNSTARTED",
	STARTED = "STARTED",
	SUCCEEDED = "SUCCEEDED",
	FAILED = "FAILED",
}

export interface StartedAsyncAction<T> {
	type: T;
	status: AsyncActionStatus.STARTED;
}

export interface SucceededAsyncAction<T, P = any> {
	type: T;
	status: AsyncActionStatus.SUCCEEDED;
	payload: P;
}

export interface FailedAsyncAction<T> {
	type: T;
	status: AsyncActionStatus.FAILED;
	payload: Error
}

export type AsyncAction<T, P = any> = StartedAsyncAction<T> | SucceededAsyncAction<T, P> | FailedAsyncAction<T>;
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('types/state/index.ts', 
'import { AsyncActionStatus } from "../actions";

export type asyncActionState<P> = {
	status: AsyncActionStatus;
	payload: P | null | Error;
};
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('types/empty', null);

--utils folder
INSERT INTO [Files] ([Path], [Contents]) VALUES ('utils/empty', null);

--api folder
INSERT INTO [Files] ([Path], [Contents]) VALUES ('api/BaseApi.ts', 
'import axios, { AxiosRequestConfig } from "axios";

interface Headers {
  ["Content-Type"]?: string;
  Authorization?: string;
}

export enum HttpRequestTypes {
  POST = "post",
  GET = "get",
  PUT = "put",
  DELETE = "delete",
  PATCH = "patch"
};

class ApiBase {

  public static doHttpRequest<T> (
      method: HttpRequestTypes, 
      url: string, 
      data: {} | PromiseLike<{}>, 
      params: {} | [] = {}, 
      asFormValues: boolean = false, 
      authenticated: boolean = true
    ) {
      return new Promise<T>(() => {
          this.doRequestInternal<T>(method, url, data, params, asFormValues, authenticated);
      });
  } 

  private static async doRequestInternal<T>(
    method: HttpRequestTypes, 
    url: string, 
    data: {} | PromiseLike<{}>, 
    params: {}, 
    asFormValues: boolean, 
    authenticated: boolean
  ) {
      let headers: Headers  = {};

      if(!asFormValues) {
        headers["Content-Type"] = "application/json";
      }

      if(authenticated) {
        headers["Authorization"] = "Bearer " + sessionStorage.getItem("token");
      }

      const config: AxiosRequestConfig = { method, url, data, headers, params };
      return await axios.request<T>(config)
  }
}

export default ApiBase;
');

--components folder
INSERT INTO [Files] ([Path], [Contents]) VALUES ('components/Layout/index.tsx', 
'import * as React from "react";
import Home from "../../pages/Home";
import NavBar from "../NavBar";

const Layout: React.FunctionComponent = () => {
	return (
		<>
			<NavBar />
			<Home />
			{/* footer component here */}
		</>
	);
}

export default Layout;
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('components/Layout/index.tsx', 
'import * as React from "react";
import Home from "../../pages/Home";
import NavBar from "../NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";

const Layout: React.FunctionComponent = () => {
	return (
		<Router>
			<>
				{/* main content components dependendcd creat on routes */}
				<NavBar/>
				<Switch>
					<Route exact={true} path="/" component={Home} />
				</Switch>
				{/* footer component here */}
			</>
		</Router>
	);
}

export default Layout;
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('components/NavBar/index.tsx', 
'import * as React from "react";
import styles from "./NavBar.module.scss";

const NavBar: React.FunctionComponent = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarleft}>
        <h1 className={styles.title}>
          <a className={styles.link} href="https://github.com/Ruinerwarrior/createreactappsycade/wiki/createreactappsycade">CreateReactAppSycade</a>
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('components/NavBar/index.tsx', 
'import * as React from "react";

const NavBar: React.FunctionComponent = () => {
  return (
    <nav className="navbar" >
      <div className="navbar-brand">
        <h1 className="title is-1">
          <a className="link is-info" href="https://github.com/Ruinerwarrior/createreactappsycade/wiki/createreactappsycade">CreateReactAppSycade</a>
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('components/NavBar/index.tsx', 
'import * as React from "react";
import styles from "./NavBar.module.css";

const NavBar: React.FunctionComponent = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarleft}>
        <h1 className={styles.title}>
          <a className={styles.link} href="https://github.com/Ruinerwarrior/createreactappsycade/wiki/createreactappsycade">CreateReactAppSycade</a>
        </h1>
      </div>
    </nav>
  );
}

export default NavBar;
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('constants/empty', 
'.navbar {
  width: 100vw;
  height: 3.25rem;
}
.navbarleft {
  margin-left: 0.5rem;
}
.link {
  color: lightseagreen;
  text-decoration: none;
}
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('components/NavBar/NavBar.module.scss', 
'.navbar {
  width: 100vw;
  height: 3.25rem;
  .navbarleft {
    margin-left: 0.5rem;
    .title {
      .link {
        color: lightseagreen;
        text-decoration: none;
      }
    }
  }
}
');

--containers folder
INSERT INTO [Files] ([Path], [Contents]) VALUES ('containers/App/index.tsx', 
'import * as React from "react";
import Layout from "../../components/Layout";

class App extends React.Component {
	render() {
		return (
			<Layout />
		);
	}
}

export default App;
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('containers/App/index.tsx', 
'import * as React from "react";
import Layout from "../../components/Layout";
import store from "../../store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Layout/>
      </Provider>
    );
  }
}

export default App;
');

--pages folder
INSERT INTO [Files] ([Path], [Contents]) VALUES ('pages/Home/index.tsx', 
'import * as React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-full">
          <h3 className="title is-3">
						For more information go to: 	
						<a className="link is-info" href="https://github.com/Ruinerwarrior/createreactappsycade/wiki/createreactappsycade">CreateReactAppSycade</a>
					</h3>
        </div>
      </div>
    );
  }
}

export default Home;
');

--reducers folder
INSERT INTO [Files] ([Path], [Contents]) VALUES ('reducers/asyncActionPayloadReducer.ts', 
'import { AsyncAction, AsyncActionStatus } from "../types/actions";

export function asyncActionPayloadOfReducer<T extends string, P>(type: T, initialState: P | null = null) {
	return (state: P | null = initialState, action: AsyncAction<T, P>): P | null => {
		if (action.type === type && action.status === AsyncActionStatus.SUCCEEDED) {
			return action.payload;
		} 
		return state;
	};
}
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('reducers/asyncActionReducer.ts', 
'import { AsyncAction, AsyncActionStatus } from "../types/actions";
import { asyncActionState } from "../types/state";

const initialState: asyncActionState<null> = {
	status: AsyncActionStatus.UNSTARTED,
	payload: null
}

export function asyncActionOfReducer<T extends string, P>(type: T, initialPayload: P | null = null) {
	return (state: asyncActionState<P | null> | null = { status: initialState.status, payload: initialPayload }, action: AsyncAction<T, P>): asyncActionState<P | null> | null => {
		if (action.type === type) {
			if (action.status === AsyncActionStatus.SUCCEEDED) {
				return { ...state, payload: action.payload, status: action.status };
			}
			if (action.status === AsyncActionStatus.FAILED) {
				return { ...state, payload: action.payload, status: action.status };
			}
			return { status: action.status, payload: state && state.payload }
		}
		return state;
	};
}
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('reducers/asyncActionStatusReducer.ts', 
'import { AsyncAction, AsyncActionStatus } from "../types/actions";

export type ReduxState = AsyncActionStatus;
export const initialState = AsyncActionStatus.UNSTARTED;

export function asyncActionStatusOfreducer<T extends string>(type: T) {
	return (state: ReduxState = initialState, action: AsyncAction<T>): ReduxState => {
		if (action.type === type) {
			return action.status;
		} 
		return state;
	};
}
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('reducers/index.ts', 
'import { combineReducers } from "redux";

const rootReducer = combineReducers({});

export default rootReducer;
');

--src folder
INSERT INTO [Files] ([Path], [Contents]) VALUES ('store.ts', 
'import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk]

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware)
));

export default store;
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('index.tsx', 
'import * as React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('index.tsx', 
'import * as React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App";
import "bulma/css/bulma.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('index.tsx', 
'import * as React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./containers/App";
import "./index.scss";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('index.scss', 
'@import "../node_modules/bulma/sass/utilities/_all";

//Overwrite bulma sass variables here

@import "../node_modules/bulma/bulma.sass";
');

INSERT INTO [Files] ([Path], [Contents]) VALUES ('components/NavBar/NavBar.module.css', 
'@import "../node_modules/bulma/sass/utilities/_all";

//Overwrite bulma sass variables here

@import "../node_modules/bulma/bulma.sass";
');