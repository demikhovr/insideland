import React from 'react';
import PropTypes from 'prop-types';
import {
  Redirect,
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';
import classes from './Constructor.module.scss';
import InnerNavigation from '../InnerNavigation/InnerNavigation';
import EditableTestList from '../../containers/EditableTestList/EditableTestList';
import EditableTestInfo from '../../containers/EditableTestInfo/EditableTestInfo';
import Quiz from '../../containers/Quiz/Quiz';

const links = [
  { to: '/constructor/tests/', label: 'Тесты', exact: false },
];

const Constructor = ({ location }) => (
  <div className={classes.Constructor}>
    <InnerNavigation links={links} />
    <div className={classes.ConstructorContentWrapper}>
      <div className={classes.ConstructorContent}>
        <Switch location={location}>
          {location.state
            ? <Route path="/constructor/tests/:id/:id" component={Quiz} />
            : <Redirect from="/constructor/tests/:id/:id" exact to="/constructor/tests/" />
          }
          <Route path="/constructor/tests/:id/" component={EditableTestInfo} />
          <Route path="/constructor/tests/" component={EditableTestList} />
        </Switch>
      </div>
    </div>
  </div>
);

Constructor.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(Constructor);
