import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};
export default Wrapper;
