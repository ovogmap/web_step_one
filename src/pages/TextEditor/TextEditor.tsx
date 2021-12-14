import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { EColors } from "../../globalStyle";

const TextEditorPure = () => {
  const [value, setValue] = useState("");
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => console.log(value), [value]);

  return (
    <TextCard
      ref={textRef}
      placeholder="텍스트를 입력해 보세요"
      contentEditable={true}
      spellCheck={false}
      onInput={(e: React.ChangeEvent<HTMLDivElement>) =>
        setValue(e.target.innerText)
      }
    />
  );
};

export default TextEditorPure;

const TextCard = styled.div`
  border-radius: 12px;
  border: 1px solid ${EColors.gray_80};
  background: #fff;
  padding: 20px;

  text-align: start;

  // placeholder를 만들기위한 css기법.
  &:empty:before {
    content: attr(placeholder);
    color: grey;
    display: inline-block;
  }
`;
