import { makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false);
// default 값 항상 false - 보안이슈 기본값 로그인 안되어있게
// makeVar: make variable apllo 함수
