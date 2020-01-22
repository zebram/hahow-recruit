This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 如何執行

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 專案說明

### 專案的架構

router存在於App,決定url跟view的喧染. view的內容從components 組成.
api在view裡呼叫,回傳的資料存於store,由Provider (index.js) 提供給需要的子components.
components/HeroProfile 擁有state,用來記錄更改中尚未儲存的資料.

### 第三方package

axios: make XMLHttpRequests request and supports the Promise API
classnames: an easy way to set className for components
react-bootstrap: for styling, layout, and ready to use components
react-router-dom: for routing
react-redux: official react binding for redux
redux-thunk: allows async control in redux

### 註解

基於KISS的原則,程式碼希望盡量簡單易懂. 
一般會下註解,除非有較為混淆的邏輯,不明原因的問題,或者程式碼可以改進的方向.

### 問題

Hero List Page, Hero Profile Page 都有 HeroList component. 如何切換頁時不會造成HeroList rerender. 什麼時候fetch跟clear Hero List的資料.

Hero Profile Page可以想成當 Hero List Page 的 HeroList被點選時 HeroProfile會出現. 如果這樣想 ＨeroList的狀態自然而然就會被保留下來, fetch跟clear Hero List資料的時機也變得單純許多. 所以我讓Hero List Page, Hero Profile Page都由同一個view component實作. 並將HeroProfile呈現的邏輯放在裡面.







