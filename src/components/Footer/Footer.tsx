import { FC } from "react"
import Container from "../Container/Container"

import "./Footer.scss"

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="Footer">
      <Container>
        <div className="Footer__content">
          <p className="Footer__info">© 2016-2019 «Need for drive»</p>

          <button type="submit" className="Footer__phone">
            8 (495) 234-22-44
          </button>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
