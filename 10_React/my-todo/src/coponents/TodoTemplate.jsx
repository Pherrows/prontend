import React from 'react';
import styled from 'styled-components';

const TodoTemplateWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  /* 컴포넌트를 따로 만들어도 되고 아니면 내부에 class로 만들어도 됨 */
  /* 자손을 의미 */
  .app-title {
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    background: white;
  }
`;

// 화면을 가운데 정렬하고, 앱 타이틀을 보여주는 컴포넌트
// children 으로 내부 자식 엘리먼트드을 props로 받아와서 렌더링
function TodoTemplate(props) {
  const {children} = props;

  return (
    <div>
    <TodoTemplateWrapper>
      <div className='app-title'>일정 관리</div>
      <div>{children}</div>
    </TodoTemplateWrapper>
    </div>
  );
}

export default TodoTemplate;