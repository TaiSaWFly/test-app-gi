import { useAppSelector } from "../redux.hooks/reduxHooks";
import { useActions } from "../redux.hooks/useActions";

/**
 * Hook useSearchValue - Performs query string storage in the application and is associated with the store
 * @returns valueBySort: string, value: string, setValue: Action Store, setValueBySort: Action Store
 */

const useSearchValue = () => {
  const { valueBySort, value } = useAppSelector((state) => state.searchValue);
  const { setValueBySort, setValue } = useActions();

  return { valueBySort, value, setValue, setValueBySort };
};

export default useSearchValue;
