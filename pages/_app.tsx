import '../styles/globals.css';
import { AuthProvider } from '../contexts/AuthContext';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}


