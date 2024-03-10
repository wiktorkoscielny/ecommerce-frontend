/*
 * @category  React-Ecommerce
 * @author    Wiktor Koscielny | <wiktorkoscielny@gmail.com>
 */

/** @namespace react-ecommerce/src/helpers/NavigationPrivder */

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ComponentProps } from "./types";

/**
 * NavigationProvider function component
 */
export const NavigationProvider = ({ Component }: ComponentProps) => {
  const navigation = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  return <Component 
            location={location}
            navigation={navigation} 
            paramsKey={id} 
          />;
};
