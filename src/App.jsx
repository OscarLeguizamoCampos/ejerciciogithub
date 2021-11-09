 
import "styles/App.css";
import Index from 'pages/index';
import RhodesianPageInfo from 'pages/rhodesian';
import BorderColliePageInfo from "pages/borderCollie";
import Layout from "layouts/layout";
import {
  BrowserRouter as Router,
  Switch,
  
  Route
} from 'react-router-dom';


const App = () =>{
  return (
    <div className="App">
      <Router>
        <Layout>
         <Switch>
          <Route path = '/rhodesian' >
            <RhodesianPageInfo />
          </Route>

          <Route path = '/borderCollie' >
            <BorderColliePageInfo />
          </Route>

          <Route path = '/' >
            <Index />
          </Route>
         </Switch>  
        </Layout> 
      </Router>

    </div>
  );
}
export default App;
