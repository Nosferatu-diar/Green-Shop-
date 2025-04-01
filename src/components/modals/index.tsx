import { useReduxSelector } from "../../hooks/useRedux";
import AuthorizationModal from "./authorization-modals";
import TrackModal from "./track-modal";

const Modals = () => {
  const { modalAuthorizationVisibilty, trackModalVisiblty } = useReduxSelector(
    (state) => state.modalSlice
  );
  return (
    <>
      {modalAuthorizationVisibilty && <AuthorizationModal />}
      {trackModalVisiblty && <TrackModal />}
    </>
  );
};

export default Modals;
