import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { DrawerMenuItem, DrawerMenuWrapper, DrawerMenuList, ToggleButton, FlexLink } from './Styled'

function DrawerMenu(): JSX.Element {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <DrawerMenuWrapper ref={ref}>
      <ToggleButton onClick={() => setOpen(!open)}>
        {open ? <i className="healthy-close" /> : <i className="healthy-menu" />}
      </ToggleButton>
      {open && (
        <DrawerMenuList>
          <DrawerMenuItem className="d-block d-lg-none">
            <FlexLink to="/my-record">
              <i className="healthy-challenge" />
              <span>自分の記録</span>
            </FlexLink>
          </DrawerMenuItem>
          <DrawerMenuItem className="d-block d-lg-none">
            <FlexLink to="/">
              <i className="healthy-record" />
              <span>チャレンジ</span>
            </FlexLink>
          </DrawerMenuItem>
          <DrawerMenuItem className="d-block d-lg-none">
            <FlexLink to="/">
              <i className="healthy-notification" />
              <span>お知らせ</span>
            </FlexLink>
          </DrawerMenuItem>
          <DrawerMenuItem>
            <Link to="/my-record">自分の記録</Link>
          </DrawerMenuItem>
          <DrawerMenuItem>
            <span>体重グラフ</span>
          </DrawerMenuItem>
          <DrawerMenuItem>
            <span>目標</span>
          </DrawerMenuItem>
          <DrawerMenuItem>
            <span>選択中のコース</span>
          </DrawerMenuItem>
          <DrawerMenuItem>
            <Link to="/column">コラム一覧</Link>
          </DrawerMenuItem>
          <DrawerMenuItem>
            <span>設定</span>
          </DrawerMenuItem>
        </DrawerMenuList>
      )}
    </DrawerMenuWrapper>
  )
}

export default DrawerMenu
