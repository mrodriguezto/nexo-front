import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store';
import { updateCanContinue, updateStep } from '../state';

type Props = {
  isValid: boolean;
  btnLabel: string;
};

const NextStepButton = ({ isValid, btnLabel }: Props) => {
  const canContinue = useAppSelector((state) => state.newProfile.canContinue);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isValid) dispatch(updateCanContinue(true));
    else dispatch(updateCanContinue(false));
  }, [isValid, dispatch]);

  const handleNextStep = () => {
    if (!canContinue) return;

    dispatch(updateStep('next'));
  };

  return (
    <Button onClick={handleNextStep} fullWidth disabled={!canContinue}>
      {btnLabel}
    </Button>
  );
};

export default NextStepButton;
