import styled from 'styled-components';
import MainNav from '../MainNav';

const StyledSidebar = styled.aside`
  width: ${(props) => (props.isOpen ? '12.5%' : '0px')};
  background-color: var(--color-mutedblue-900);
  color: white;
  padding: ${(props) => (props.isOpen ? '8px 8px 0 0' : '0px')};
  transition: all 0.3s;

  display: flex;
  flex-direction: column;
  align-items: left;

  &:hover,
  &:active,
  &.active {
    transition: all 0.3s;
  }
`;

function Sidebar({ isOpen, activeMenu, role, onMenuSelect }) {
  return (
    <StyledSidebar isOpen={isOpen}>
      <MainNav
        isOpen={isOpen}
        activeMenu={activeMenu}
        role={role}
        onMenuSelect={onMenuSelect}
      />
    </StyledSidebar>
  );
}

export default Sidebar;
