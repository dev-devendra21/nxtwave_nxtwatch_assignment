import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import VideoItemDetails from './components/VideoItemDetails'
import UserContext from './Context/UserContext'

// Replace your code here
class App extends Component {
  state = {isDark: false, videoPlaylist: []}

  changeTheme = value => {
    this.setState({isDark: !value})
  }

  onSaveVideo = videos => {
    const {videoPlaylist} = this.state
    const isIdPresent = videoPlaylist.find(
      eachVideo => eachVideo.id === videos.id,
    )
    if (isIdPresent === undefined) {
      this.setState(previousValue => ({
        videoPlaylist: [
          ...previousValue.videoPlaylist,
          {...videos, isSaved: true},
        ],
      }))
    } else {
      this.setState(previousValue => ({
        videoPlaylist: previousValue.videoPlaylist.filter(
          eachVideo => eachVideo.id !== videos.id,
        ),
      }))
    }
  }

  render() {
    const {isDark, videoPlaylist} = this.state
    return (
      <UserContext.Provider
        value={{
          isDark,
          videoPlaylist,
          onChangeTheme: this.changeTheme,
          onSaveVideos: this.onSaveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </UserContext.Provider>
    )
  }
}

export default App
