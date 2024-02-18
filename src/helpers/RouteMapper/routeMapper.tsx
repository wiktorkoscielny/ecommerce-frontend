/*
 * @category  React-Ecommerce
 * @author    Wiktor Koscielny | <wiktorkoscielny@gmail.com>
 */

/** @namespace react-ecommerce/src/helpers/RouteMapper */

import { Route } from "react-router-dom";
import { ReactElement } from "react";
import { NavigationProvider } from "../NavigationProvider/navigationProvider";
import { DataCombinedType, DataAltType } from "./types";

/**
 * RouteMapper function component
 */
export const routeMapper = ({
  path,
  component,
  isWithNavigation,
}: DataCombinedType): ReactElement<DataAltType> => {
  if (isWithNavigation) {
    return (
      <Route
        path={path}
        element={<NavigationProvider Component={component} />}
      />
    );
  }
  return <Route path={path} element={component} />;
};
