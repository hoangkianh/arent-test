import styled from 'styled-components/macro'

export const HeaderWrapper = styled.div`
  padding: 12px 0;
  background-color: ${props => props.theme.dark[500]};
  color: ${props => props.theme.light};

  .container {
    height: 100%;
  }
`
export const LogoImage = styled.img`
  height: 40px;
`
export const MainMenu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const MainMenuItem = styled.li`
  margin: 0 32px;

  a {
    display: flex;
    align-items: center;
    color: #fff;

    &:hover {
      color: ${props => props.theme.primary[400]};
    }
  }

  i {
    font-size: 24px;
    color: ${props => props.theme.primary[400]};
  }

  span {
    display: inline-block;
    margin-left: 8px;
  }
`
export const ToggleButton = styled.div`
  margin-left: 32px;
  cursor: pointer;
  width: 32px;
  height: 32px;

  i {
    display: inline-block;
    vertical-align: middle;
    color: ${props => props.theme.primary[400]};
  }
`
export const DrawerMenuWrapper = styled.div`
  position: relative;
`
export const DrawerMenuList = styled.ul`
  position: absolute;
  width: 280px;
  top: 150%;
  right: 0;
  background-color: ${props => props.theme.gray};
  z-index: 99;
  transition: all 0.3s ease;
`
export const DrawerMenuItem = styled.li`
  border-top: 1px solid ${props => props.theme.light}26;
  border-bottom: 1px solid ${props => props.theme.dark[600]}26;

  a,
  span {
    display: block;
    padding: 24px 32px;
    color: #fff;
  }

  &:hover {
    a,
    span {
      color: ${props => props.theme.primary[400]};
    }
  }
`
