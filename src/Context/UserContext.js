import React from 'react'

const UserContext = React.createContext({
  isDark: false,
  videoPlaylist: [],
  onSaveVideos: () => {},
  onChangeTheme: () => {},
})

export default UserContext
