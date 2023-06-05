import React from 'react';
import styled from 'styled-components';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md"

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; // 차지할 수 있는 모든 영역 차지
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와 상태에 따라 다른 스타일의 UI를 보여줌
function TodoListitem(props) {

  // props로 받았을 경우 구조 분해 할당 하는법
  const {todo:{id, text, checked}} = props;

  return (
    <TodoListItemWrapper>
      <Checkbox>
        <MdCheckBoxOutlineBlank />
      </Checkbox>
      <Text>{text}</Text>
      <Remove>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
}

export default TodoListitem;