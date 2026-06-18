import { useSearchParams } from "react-router-dom";

type QueryValue = string | number | boolean | null | undefined;
type QueryParams = Record<string, QueryValue>;

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParams = (): QueryParams => {
    const params: QueryParams = {};
    searchParams.forEach((value, key) => {
      if (value === "true") params[key] = true;
      else if (value === "false") params[key] = false;
      else if (!isNaN(Number(value)) && value !== "") params[key] = Number(value);
      else params[key] = value;
    });
    return params;
  };

  const getParam = (key: string): string | null => {
    return searchParams.get(key);
  };

  const setParams = (newParams: QueryParams, replace: boolean = false) => {
    const currentParams = getParams();
    
    const merged = { ...currentParams, ...newParams };

    Object.keys(merged).forEach((key) => {
      if (merged[key] === null || merged[key] === undefined) {
        delete merged[key];
      }
    });

    const urlParams = new URLSearchParams();
    Object.entries(merged).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        urlParams.set(key, String(value));
      }
    });

    setSearchParams(urlParams, { replace });
  };

  const removeParams = (keys: string | string[], replace: boolean = false) => {
    const keysArray = Array.isArray(keys) ? keys : [keys];
    const currentParams = getParams();
    const newParams = { ...currentParams };
    keysArray.forEach((key) => {
      delete newParams[key];
    });
    setParams(newParams, replace);
  };

  const clearParams = (replace: boolean = false) => {
    setSearchParams({}, { replace });
  };

  return {
    searchParams,
    getParams,
    getParam,
    setParams,
    removeParams,
    clearParams,
  };
}