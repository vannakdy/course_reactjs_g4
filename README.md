* run project from git
    1. clone
    2. goto root 
        > npm install
        > npm start

* install node and npm 
    > node -v => node >= 14.0.0
    > npm -v => npm >= 6.0.0
* install project reactjs
    > npx create-react-app project_name
* run project
    goto root
    > npm start
    http://localhost:3000
* Modify App.js


* configure route
    - install react-route-dom
        > npm install-react-route-dom@6
    - import {BroswerRouter,Routes,Route} from react-route-dom
    - Config route not found
    - create page
        src/screen/subfolder/screen_name.js
            const AboutScreen = () =>{
                return (
                    <div>
                    <h1>AboutScreen</h1>
                    </div>
                )
            }
            export default AboutScreen;
    - import all screen use in App.js
    - properties path and element in component Route
        <Route path="/student" element={<StudentScreen/>} />
    - Test route in broswer
        http://localhost:3000/route_name
    - Create header link
        import {Link} from react-route-dom
        <Link className="menu_item" to="/student">Student</Link>
        in App.js 


- Setup
- Project stucture meaning
- Basic variable display data
- Style internal and external
- Render Data
* Configure route
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
* install axios library
    - what is axios
    - install
    - usage


