import { FC, useMemo } from "react"
import { Link, useParams } from "react-router-dom"
import { useTypedSelector } from "store/selectors"
import Container from "components/Container"
import classNames from "classnames"

import { ReactComponent as Triangle } from "assets/icons/Breadcrumbs/triangle.svg"
import { IUnlockeOrderStep } from "store/order/types"
import dataBreadcrumbs from "./data"

import "./styles.scss"

const Breadcrumbs: FC = () => {
  const { order } = useTypedSelector((state) => state)
  const params = useParams()

  const links = useMemo<JSX.Element[]>(() => dataBreadcrumbs.map((elem, index) => {
    const itemClassName = classNames(
      "Breadcrumbs__item",
      {
        Breadcrumbs__item_active: params.id === elem.id
      },
      {
        Breadcrumbs__item_disabled: !order.unlockedStep[elem.id]
      }
    )

    return (
      <Link
        to={elem.path}
        className={itemClassName}
        key={elem.id}
      >
        {elem.title}
        <div className="Breadcrumbs__icon">
          {index + 1 !== dataBreadcrumbs.length && <Triangle />}
        </div>
      </Link>
    )
  }), [params.id, order])

  return (
    <div className="Breadcrumbs">
      <Container>
        <div className="Breadcrumbs__content">{links}</div>
      </Container>
    </div>
  )
}

export default Breadcrumbs
