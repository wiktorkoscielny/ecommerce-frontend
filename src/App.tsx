/*
 * @category  React-Ecommerce
 * @author    Wiktor Koscielny | <wiktorkoscielny@gmail.com>
 */

/** @namespace react-ecommerce/src */

import { BrowserRouter, Routes } from "react-router-dom";
import { routeMapper } from './helpers/RouteMapper/routeMapper';
import { RoutesData } from "./helpers/RouteMapper/routes";
import { DataCombinedType } from "./helpers/RouteMapper/types";

/**
 * App function core component
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RoutesData.map((item) => {
          const {
            path,
            component,
            isWithNavigation
          } = ({} = item);
          
          return routeMapper(
            ({
              path,
              component,
              isWithNavigation
            }) as DataCombinedType
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
