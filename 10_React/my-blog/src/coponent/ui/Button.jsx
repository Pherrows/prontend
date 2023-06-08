import React from 'react';
import styled from 'styled-components'

const StuledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

// 공통 버튼 컴포넌트
function Button(props) {
  const {title, onClick} = props;

  return (
    // props로 받아온 title 이 있을떄는 title의 값을 보여주고 아니면 기본값 `버튼`
    // 클릭 했을 때 어떤 동작을 할 것인가는 상위 컴포넌트에서 받아옴
    <StuledButton onClick={onClick}>
      {title || '버튼'}
    </StuledButton>
  );
}

export default Button;