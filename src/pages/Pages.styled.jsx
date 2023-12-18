import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SectionStyle = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
  min-height: 100vh;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  background-color: #4caf50;
  font-weight: 700;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  width: 120px;
  transition: background-color 0.3s, box-shadow 0.3s;
  &:hover {
    color: #fff;
    background-color: #45a049;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const WrapStyle = styled.div`
  display: flex;
  gap: 20px;
`;

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;

export const AddListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  text-decoration: underline;
`;

export const FooterStyle = styled.div`
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #b7cabc;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
