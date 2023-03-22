import usePayingUserOnly from '../../components/hooks/usePayingUserOnly';
import ProtectedPage from '../../components/layout/ProtectedPage';
import ReviewForm from './ReviewForm';

export default function UploadReview() {
  // usePayingUserOnly();
  return (
    <ProtectedPage>
      <ReviewForm />
      <div>Upload Review</div>
    </ProtectedPage>
  );
}
