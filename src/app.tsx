import * as React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { useAsyncComponent } from './utils/hooks';
import * as HistoryHelpers from './utils/helpers/history-helpers';
import { LoadingPage } from './pages/Loading';

const HomePage = import('./pages/Home').then((page) => page.HomePage);
const CommentsPage = import('./pages/Comments').then(
  (page) => page.CommentsPage
);
const Error404Page = import('./pages/Error404').then(
  (page) => page.Error404Page
);
const ShowPage = import('./pages/Show').then((page) => page.ShowPage);
const NewPage = import('./pages/New').then((page) => page.NewPage);
const NewsPage = import('./pages/News').then((page) => page.NewsPage);
const AskPage = import('./pages/Ask').then((page) => page.AskPage);

const App = () => {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Router history={HistoryHelpers.history}>
        <Switch>
          <Route exact path="/" component={useAsyncComponent(HomePage)} />
          <Route path="/item" component={useAsyncComponent(CommentsPage)} />
          <Route exact path="/show" component={useAsyncComponent(ShowPage)} />
          <Route exact path="/news" component={useAsyncComponent(NewsPage)} />
          <Route exact path="/newest" component={useAsyncComponent(NewPage)} />
          <Route exact path="/ask" component={useAsyncComponent(AskPage)} />
          <Route component={useAsyncComponent(Error404Page)} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default App;
