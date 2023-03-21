import React from 'react';
import usePayingUserOnly from '../../components/hooks/usePayingUserOnly';
import ProtectedPage from '../../components/ProtectedPage';

export default function UploadReview() {
  // usePayingUserOnly();
  return (
    <ProtectedPage>
      <div>Upload Review</div>
    </ProtectedPage>
  );
}
