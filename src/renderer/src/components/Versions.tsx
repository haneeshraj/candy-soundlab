import { useEffect, useState } from 'react'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)

  const [v, setVersion] = useState('')

  const getVersion = async () => {
    const version = await window.api.getVersion()
    setVersion(version)
  }

  useEffect(() => {
    getVersion()
  })

  return (
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
      <li className="v8-version">{v}</li>
    </ul>
  )
}

export default Versions
