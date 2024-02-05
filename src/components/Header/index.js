import {withRouter, Link} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  NavBar,
  WebsiteLogo,
  NavLink,
  CustomButton,
  DarkMode,
  LightMode,
  Avatar,
  LogOutButton,
  LogoutIcon,
  Modal,
  ModalMessage,
  CancelButton,
  ConfirmButton,
  LogoutIconButton,
  StyledPopup,
  MobileMenu,
  MobileMenuButton,
  MobileLogout,
  DesktopLogout,
  SidebarListContainer,
  CloseButton,
  Close,
} from './styledComponents'
import UserContext from '../../Context/UserContext'

import SideBarItem from '../SideBarItem'

const tabList = [
  {optionId: 'HOME', displayText: 'Home'},
  {optionId: 'TRENDING', displayText: 'Trending'},
  {optionId: 'GAMING', displayText: 'Gaming'},
  {optionId: 'SavedVideos', displayText: 'Saved videos'},
]

class Header extends Component {
  state = {activeTab: tabList[0].optionId}

  onActiveTab = id => {
    this.setState({activeTab: id})
  }

  getTabId = () => {
    const {match} = this.props
    const {path} = match
    switch (path) {
      case '/':
        return 'HOME'
      case '/trending':
        return 'TRENDING'
      case '/gaming':
        return 'GAMING'
      case '/saved-videos':
        return 'SavedVideos'
      default:
        return ''
    }
  }

  render() {
    return (
      <>
        <UserContext.Consumer>
          {value => {
            const {isDark, onChangeTheme} = value
            const changeTheme = () => {
              onChangeTheme(isDark)
            }

            const onLogout = () => {
              const {history} = this.props
              Cookies.remove('jwt_token')
              history.replace('/login')
            }

            const logoImageUrl = isDark
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

            const tabId = this.getTabId()

            return (
              <>
                <NavBar isdark={isDark}>
                  <Link to="/">
                    <WebsiteLogo src={logoImageUrl} alt="website logo" />
                  </Link>
                  <NavLink>
                    <CustomButton
                      data-testid="theme"
                      onClick={changeTheme}
                      type="button"
                    >
                      {isDark ? <LightMode /> : <DarkMode />}
                    </CustomButton>
                    <Avatar
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
                      alt="profile"
                    />
                    <StyledPopup
                      isdark={isDark}
                      trigger={
                        <MobileMenuButton>
                          <MobileMenu isdark={isDark} />
                        </MobileMenuButton>
                      }
                      modal
                    >
                      {close => (
                        <>
                          <CloseButton>
                            <Close isdark={isDark} onClick={close} />
                          </CloseButton>
                          <SidebarListContainer>
                            {tabList.map(eachTab => (
                              <SideBarItem
                                key={eachTab.optionId}
                                tabItem={eachTab}
                                onActiveTab={this.onActiveTab}
                                isActive={tabId === eachTab.optionId}
                              />
                            ))}
                          </SidebarListContainer>
                        </>
                      )}
                    </StyledPopup>
                    <DesktopLogout
                      trigger={
                        <LogOutButton isdark={isDark} type="button">
                          Logout
                        </LogOutButton>
                      }
                      modal
                    >
                      {close => (
                        <Modal isdark={isDark}>
                          <ModalMessage isdark={isDark}>
                            Are you sure, you want to logout
                          </ModalMessage>
                          <div>
                            <CancelButton type="button" onClick={close}>
                              Cancel
                            </CancelButton>
                            <ConfirmButton type="button" onClick={onLogout}>
                              Confirm
                            </ConfirmButton>
                          </div>
                        </Modal>
                      )}
                    </DesktopLogout>
                    <MobileLogout
                      trigger={
                        <LogoutIconButton type="button">
                          <LogoutIcon isdark={isDark} />
                        </LogoutIconButton>
                      }
                      modal
                      nested
                    >
                      {close => (
                        <Modal isdark={isDark}>
                          <ModalMessage isdark={isDark}>
                            Are you sure you want to logout?
                          </ModalMessage>
                          <div>
                            <CancelButton type="button" onClick={close}>
                              Cancel
                            </CancelButton>
                            <ConfirmButton type="button" onClick={onLogout}>
                              Confirm
                            </ConfirmButton>
                          </div>
                        </Modal>
                      )}
                    </MobileLogout>
                  </NavLink>
                </NavBar>
              </>
            )
          }}
        </UserContext.Consumer>{' '}
      </>
    )
  }
}

export default withRouter(Header)
