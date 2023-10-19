import React from 'react';
import { useSelector } from 'react-redux';
import { getFormFilterValues } from 'store/selectors';
import { useActions } from 'hooks/useAction';
import { Button } from 'components/UI';
import './style.css';

interface FilterFormApplyBtnProps {
  classNameMode?: string;
  callback: () => void;
}

export const FilterFormApplyBtn: React.FC<FilterFormApplyBtnProps> = ({
  classNameMode = '',
  callback,
}) => {
  const { updateGlobalState } = useActions();
  const formFilterValues = useSelector(getFormFilterValues);

  const applyFilter = () => {
    updateGlobalState({
      ...formFilterValues,
    });
  };

  const handleApplyBtnClick = () => {
    applyFilter();
    callback();
  };

  return (
    <Button
      className={'filter-btn ' + classNameMode}
      label={'Apply filter'}
      hanldeClick={handleApplyBtnClick}
    />
  );
};
