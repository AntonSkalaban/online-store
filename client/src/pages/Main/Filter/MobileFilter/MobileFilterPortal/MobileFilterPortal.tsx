import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { FormFilterValues } from 'store/slice';
import { getFormFilterValues } from 'store/selectors';
import { useActions } from 'hooks';
import { MobileFilterList } from '../MobileFilterList/MobileFilterList';
import { MobileFilterInputs } from '../MobileInputsList/MobileInputsList';
import './style.css';

interface MobileFilterPortalProps {
  isOpen: boolean;
  closePortal: () => void;
}

export const MobileFilterPortal: React.FC<MobileFilterPortalProps> = ({ isOpen, closePortal }) => {
  const { updateGlobalState } = useActions();
  const formFilterValues = useSelector(getFormFilterValues);
  const [openFilterName, setOpenFilterName] = useState('');

  const applyFilter = () => {
    updateGlobalState({
      ...formFilterValues,
    });
  };

  const hanldeCloseBtnClick = () => {
    applyFilter();
    closePortal();
  };

  if (!isOpen) return null;

  return createPortal(
    <section className="mobile-filter-list">
      <div className="mobile-filter-list__controller-container">
        {' '}
        <p className="mobile-filter-list__close-btn " onClick={hanldeCloseBtnClick}>
          X
        </p>
      </div>

      <div className="mobile-filter-list__content-container">
        {openFilterName ? (
          <MobileFilterInputs
            openFilterName={openFilterName as keyof FormFilterValues}
            openFilterInputs={setOpenFilterName}
            callback={closePortal}
          />
        ) : (
          <MobileFilterList openFilterInputs={setOpenFilterName} />
        )}
      </div>
    </section>,
    document.body
  );
};
