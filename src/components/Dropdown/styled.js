import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 130px;
  height: 100%;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: ${props => (props.isHide ? "-300px" : "75px")};
  right: 0;
  margin: 0;
  padding: 0;
  width: 300px;
  height: 120px;
  overflow-y: auto;
  box-shadow: 0 0 16px 0 ${props => props.theme.color.thirty};
  background-color: ${props => props.theme.color.primary};
  border: 1px solid ${props => props.theme.color.fourty};
  border-radius: 3px;
  list-style-type: none;
  transition: all 0.5s ease-in-out;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 5px;
    outline: 1px solid ${props => props.theme.color.tenth};
  }
`;

export const DropdownItem = styled.li`
  height: 40px;
  line-height: 40px;
  padding-left: 20px;
  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.color.seventh};
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: ${props => props.theme.color.fourty};
    color: ${props => props.theme.color.eight};
  }
`;

export const Icon = styled.button`
  position: relative;
  height: 100%;
  padding: 20px;
  background: #fff;
  border: 0;
  outline: 0;

  &:focus {
    outline: 0;
  }

  &:before {
    content: "";
    position: absolute;
    left: calc(50% - 5px);
    top: calc(50% - 5px);
    width: 10px;
    height: 10px;
    border-top: solid 2px currentColor;
    border-right: solid 2px currentColor;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
  }
`;
