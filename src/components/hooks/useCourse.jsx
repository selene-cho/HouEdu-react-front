import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCourse } from '../../api/api';

export function useCourse() {
   const { courseId } = useParams();
   const { data } = useQuery([`courses`, courseId], getCourse);
   return {
      data: data,
   };
}
