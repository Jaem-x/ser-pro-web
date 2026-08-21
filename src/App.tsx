import { Outlet } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { ScrollToTop } from './components/shared/ScrollToTop';

function App() {
  return (
    <PageLayout>
      <ScrollToTop />
      <Outlet />
    </PageLayout>
  );
}

export default App;
