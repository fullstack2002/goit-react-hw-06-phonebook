import styled from '@emotion/styled'
export const PhoneForm = styled.form`
  padding: 20px;
	border: 1px solid lightgrey;
	text-align: left;
`;
export const PhoneField = styled.label`
  display: block;
	margin: 10px;
`;
export const PhoneTitle = styled.span`
  display: block;
`;
export const PhoneInput = styled.input`
  width: 200px;
`;
export const PhoneButton = styled.button`
  width: 120px;
	margin-left: 10px;
	background-color: #77bbd4;
	border: 1px solid grey;
	border-radius: 2px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
	background-color: #4d7d8e;
}
`;