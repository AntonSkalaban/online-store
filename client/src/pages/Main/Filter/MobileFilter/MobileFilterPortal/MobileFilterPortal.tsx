import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { initOpenPage, updateGlobalState } from 'store/slice';
import { getFormFilterValues } from 'store/selectors';
import { MobileFilterList } from '../MobileFilterList/MobileFilterList';
import { MobileFilterInputs } from '../MobileInputsList/MobileInputsList';
import './style.css';

interface MobileFilterPortalProps {
  isOpen: boolean;
  closePortal: () => void;
}

export const MobileFilterPortal: React.FC<MobileFilterPortalProps> = ({ isOpen, closePortal }) => {
  const dispatch = useDispatch();
  const formFilterValues = useSelector(getFormFilterValues);
  const [openFilterName, setOpenFilterName] = useState('');

  const applyFilter = () => {
    dispatch(
      updateGlobalState({
        ...formFilterValues,
        page: '0',
      })
    );
    dispatch(initOpenPage(0));
  };

  if (!isOpen) return null;

  return createPortal(
    <section className="mobile-filter-list">
      <div className="mobile-filter-list__controller-container">
        {' '}
        <p
          className="mobile-filter-list__close-btn "
          onClick={() => {
            applyFilter();
            closePortal();
          }}
        >
          X
        </p>
      </div>

      <div className="mobile-filter-list__content-container">
        {openFilterName ? (
          <MobileFilterInputs
            openFilterName={openFilterName}
            openFilterInputs={setOpenFilterName}
            applyFilter={applyFilter}
          />
        ) : (
          <MobileFilterList openFilterInputs={setOpenFilterName} />
        )}
      </div>
    </section>,
    document.body
  );
};
