import React from 'react';
import { useParams } from 'react-router-dom';

export default function Lectures() {
  const { courseId } = useParams();
  console.log(courseId);
  return <div>Lectures</div>;
}
