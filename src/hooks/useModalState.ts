import { useState } from "react";

export const useModalState = <T>(
  initialPayload?: T
): {
  isModalVisible: boolean;
  payload: T | undefined;
  openModal: (payload?: T) => void;
  closeModal: () => void;
} => {
  const [payload, setPayload] = useState<T | undefined>(initialPayload);
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = (payload?: T) => {
    setPayload(payload);
    setModalVisible(true);
  };
  const closeModal = () => {
    setPayload(undefined);
    setModalVisible(false);
  };

  return {
    isModalVisible,
    payload,
    openModal,
    closeModal,
  };
};
