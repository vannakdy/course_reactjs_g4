- run project from git
    1. clone
    2. goto root 
        > npm install
        > npm start

- install node and npm 
    > node -v => node >= 14.0.0
    > npm -v => npm >= 6.0.0
- install project reactjs
    > npx create-react-app project_name
- run project
    goto root
    > npm start
    http://localhost:3000
- Modify App.js








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

- Setup
- Project stucture meaning
- Basic variable display data
- Style internal and external
- Render Data
- Configure route
    > npm install react-router-dom@6
    - create pages 
        - crate folder screen
            - home
                - HomeScreen.js
                    const HomeScreen = () =>{
                        return (
                        <div>
                            <h1>HomeScreen</h1>
                        </div>
                        )
                    }
                    export default HomeScreen
            - teacher
                - TeaherScreen.js
            - student
                - StudentScree.js
            - 404
                - 404.js
            - auth
        - config list route in App.js
            import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

                <BrowserRouter>
                    /////// master link
                    <Routes>
                        <Route path="/" element={<HomeScreen/>} />
                        <Route path="/student" element={<StudentScreen/>} />
                        <Route path="/about" element = {<AboutScreen/>} />
                        <Route path="*" element={<RoutNotFoundScreen/>} />
                    </Routes>
                </BrowserRouter>
            done => test in browser
                type : loclahost:3000/
                type : loclahost:3000/about
                type : loclahost:3000/student
