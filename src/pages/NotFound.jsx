import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops! 🫥</h1>
      <p>해당 페이지를 찾지 못했습니다</p>
      <p>주소가 잘못되었거나, 더 이상 제공하지 않는 페이지입니다.</p>
      <p>
        에러 메세지 :<i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">메인페이지로</Link>
    </div>
  );
}
