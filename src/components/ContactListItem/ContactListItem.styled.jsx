import styled from '@emotion/styled';
export const ContactListButton = styled.button`
	background-color: #77bbd4;
	border: 1px solid gray;
	border-radius: 2px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #4d7d8e;
  }
`;
export const ContactListElement = styled.li`
  font-size: 16px;
	line-height: 32px;
  list-style: none;
`;