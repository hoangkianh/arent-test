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
export const MenuList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const MenuListItem = styled.li`
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
    font-size: 20px;
  }

  span {
    display: inline-block;
    margin-left: 8px;
  }
`
