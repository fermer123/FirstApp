import {Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import GlobalStyle from '@app/global';
import Theme from '@app/Theme/Theme';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Loader from '@components/Loader/Loader';
import BusinessСard from '@exposes/BusinessСard/BusinessСard';
import {ThemeProvider} from '@provider/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Suspense fallback={<Loader />}>
    <ErrorBoundary>
      <ThemeProvider>
        <Theme>
          <GlobalStyle />
          <BusinessСard value='Карточка' />
        </Theme>
      </ThemeProvider>
    </ErrorBoundary>
  </Suspense>,
);
