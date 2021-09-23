//core packages
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'



//created components
import Layout from './components/Layout';
import { DashBoard } from './components/DashBoard';
import TimeTableOne from './components/TimeTable/TimeTableOne';
import TimeTableTwo from './components/TimeTable/TimeTableTwo';
import TimeTableThree from './components/TimeTable/TimeTableThree';

//Context 
import { TimeTableProvider } from './context/TimeTableContext';




//main app
const App = () => {
  return (
    <TimeTableProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={DashBoard} />
            <Route path="/time-table/sem1" exact component={TimeTableOne} />
            <Route path="/time-table/sem2" exact component={TimeTableTwo} />
            <Route path="/time-table/sem3" exact component={TimeTableThree} />
          </Switch>

        </Layout>
      </BrowserRouter>
    </TimeTableProvider>
  );
}

export default App;
