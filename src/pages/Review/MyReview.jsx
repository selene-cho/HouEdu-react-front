import ProtectedPage from '../../components/layout/ProtectedPage';
import UsePayingUserOnly from '../../components/layout/UsePayingUserOnly';
import ReviewForm from './ReviewForm';
import MyReviewList from './MyReviewList';

export default function MyReview() {
  return (
    <ProtectedPage>
      <UsePayingUserOnly>
        <ReviewForm />
        <MyReviewList />
      </UsePayingUserOnly>
    </ProtectedPage>
  );
}
