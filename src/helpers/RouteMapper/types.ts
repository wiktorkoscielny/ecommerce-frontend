/*
 * @category  React-Ecommerce
 * @author    Wiktor Koscielny | <wiktorkoscielny@gmail.com>
 */

/** @namespace react-ecommerce/src/helpers/RouteMapper */

import { ComponentType } from "react";
import { navigationProviderType } from "../NavigationProvider/types";

interface BaseType {
  path: string;
  isWithNavigation: boolean;
}

interface ComponentAType extends BaseType {
  component: JSX.Element;
}

interface ComponentBType extends BaseType {
  component: ComponentType<navigationProviderType>;
}

export type DataCombinedType =
  & ComponentAType
  & ComponentBType;

export type DataAltType = 
  | ComponentAType
  | ComponentBType;
  