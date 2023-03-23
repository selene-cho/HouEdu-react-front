import ProtectedPage from '../../components/layout/ProtectedPage';
import UsePayingUserOnly from '../../components/layout/UsePayingUserOnly';
import ReviewForm from './ReviewForm';

export default function UploadReview() {
  return (
    <ProtectedPage>
      <UsePayingUserOnly>
        <ReviewForm />
        <div>My Review</div>
      </UsePayingUserOnly>
    </ProtectedPage>
  );
}
