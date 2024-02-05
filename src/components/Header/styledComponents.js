import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Popup from 'reactjs-popup'

export const NavBar = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.isdark ? '#212121' : '#ffffff')};
  height: 15vh;
`
export const WebsiteLogo = styled.img`
  width: 100px;
  height: 40px;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 50px;
  }
  @media screen and (max-width: 280px) {
    width: 80px;
    height: 35px;
  }
`
export const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`
export const DarkMode = styled(FaMoon)`
  font-size: 30px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin-right: 50px;
    font-size: 40px;
  }
`

export const LightMode = styled(FiSun)`
  font-size: 30px;
  cursor: pointer;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    margin-right: 50px;
    font-size: 40px;
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const CustomButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  width: 40px;
`

export const LogOutButton = styled.button`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.isdark ? '#BABABA' : '#378ff3')};
  padding: 10px;
  width: 80px;
  font-weight: 600;
  color: ${props => (props.isdark ? '#BABABA' : '#378ff3')};
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const LogoutIcon = styled(FiLogOut)`
  font-size: 30px;
  cursor: pointer;
  color: ${props => (props.isdark ? '#ffffff' : '')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Modal = styled.div`
  width: 250px;
  height: 150px;
  background-color: ${props => (props.isdark ? '#212121' : '#FFFFFF')};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 8px;
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`

export const ModalMessage = styled.p`
  font-size: 16px;
  color: ${props => (props.isdark ? '#CECFD1' : '#164278')};
  text-align: center;
`

export const CancelButton = styled.button`
  border: 1px solid #656f7b;
  border-radius: 5px;
  background-color: transparent;
  padding: 10px;
  color: #656f7b;
  outline: none;
  margin-right: 10px;
  cursor: pointer;
`

export const ConfirmButton = styled.button`
  border: 1px solid #2082f2;
  border-radius: 5px;
  background-color: #2082f2;
  padding: 10px;
  color: #ffffff;
  margin-left: 10px;
  cursor: pointer;
`

export const MobileMenuButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-width: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MobileMenu = styled(GiHamburgerMenu)`
  color: ${props => (props.isdark ? '#FFFFFF' : '#212121')};
  margin-right: 10px;
  font-size: 25px;
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: ${props => (props.isdark ? '#212121' : '#ffffff')};
  }
  &-content {
    width: 100%;
    height: 100%;
  }
`

export const MobileLogout = styled(Popup)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopLogout = styled(Popup)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`

export const LogoutIconButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const SidebarListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  margin-top: 50px;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  text-align: right;
  width: 90%;
  margin-top: 20px;
`

export const Close = styled(AiOutlineClose)`
  color: ${props => (props.isdark ? '#ffffff' : '#212121')};
  font-size: 25px;
`
