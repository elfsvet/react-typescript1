import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import React, { PropsWithChildren } from 'react';
function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}
export default Layout;
