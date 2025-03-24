import { useReduxSelector } from "../../hooks/useRedux";
import AuthorizationModal from "./authorization-modals";

const Modals = () => {
  const { modalAuthorizationVisibilty } = useReduxSelector(
    (state) => state.modalSlice
  );
  return <>{modalAuthorizationVisibilty && <AuthorizationModal />}</>;
};

export default Modals;
