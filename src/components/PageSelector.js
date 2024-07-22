import HomePage from "./Homepage";
import AboutUs from "./AboutUs";
import CreditCard from "./CreditCard";
import Account from "./Account";
import LogIn from "./LogIn";
import { useState, useEffect } from 'react';

import { pageContainer, pageEventEmitter } from "./Global";

function PageSelector() {

  const [page, setPageState] = useState(pageContainer.item);

  useEffect(() => {
    const handlePageChange = (newPage) => {
        console.log(newPage);
        setPageState(newPage);
    };

    pageEventEmitter.on('pageChange', handlePageChange);

    return () => {
        pageEventEmitter.off('pageChange', handlePageChange);
    };
  }, []);

  // Display different pages based on the variable value

  console.log(pageContainer.item);

  switch (pageContainer.item) {

    case 0:
        return (
            <HomePage />
        );

    case 1:
        return (
            <LogIn />
        );

    case 2:
        return (
            <AboutUs />
        );

    case 3:
        return (
            <CreditCard />
        );

    case 4:
        return (
            <Account />
        );

  }

}

export default PageSelector;
