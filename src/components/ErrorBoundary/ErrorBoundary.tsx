/* eslint-disable react/destructuring-assignment */
import {Component, ErrorInfo, ReactNode} from 'react';

import {Box, Button} from '@mui/material';

import styles from './ErrorBoundary.module.scss';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  static handleGoBack = () => {
    window.history.back();
  };

  // to={RoutePath.utilizations}
  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Box className={styles?.container}>
          <div>Неизвестная ошибка</div>
          <div>{this.state.hasError}</div>
          <Button onClick={ErrorBoundary.handleGoBack}>Вернуться назад</Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
