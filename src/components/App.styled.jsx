import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${p => p.theme.spacing(2)} auto;
  max-width: 100%;
  width: 400px;
  height: auto;
  text-align: center;
  border: 1px solid ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.bgcard};
`;

export const Title = styled.h2`
color:  ${p => p.theme.colors.white};
  margin-top: ${p => p.theme.spacing(4)};
`;