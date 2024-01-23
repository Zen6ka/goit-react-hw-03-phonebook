import styled from 'styled-components';

export const Input = styled.input`
  padding: ${p => p.theme.spacing(3)};
  margin-top: ${p => p.theme.spacing(4)};
  margin-bottom: ${p => p.theme.spacing(4)};
  border-radius: ${p => p.theme.radii.lg};;
  border: 1px solid ${p => p.theme.colors.gray};
  outline: 0;
  background-color: ${p => p.theme.colors.white};
	color: ${p => p.theme.colors.gray};
	font-size: 16px;
	font-weight: 500;
`;