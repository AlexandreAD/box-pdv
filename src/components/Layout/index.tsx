import React from 'react';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import * as s from './styled';

import GlobalStyles from '../../styles/global';

type Props = {
  children?: React.ReactNode
};
const Layout: React.FC<Props> = ({ children }) => (
  <s.LayoutWrapper>
    <GlobalStyles />
    <MenuBar />
    <s.LayoutMain>{children}</s.LayoutMain>
    <Sidebar />
  </s.LayoutWrapper>
);

export default Layout;
