import clsx from 'clsx'
import {memo} from 'react'
import {HelperLinks, OtherLinks} from './Links'
import classes from './style.module.css'

function Footer() {
  return (
    <footer
      className={clsx(classes.footer)}
    >
      <div className="flex-shrink-0">

      </div>

      <div className={classes.navigationLinks}>
        <HelperLinks/>
        <OtherLinks/>
      </div>
    </footer>
  )
}

export default memo(Footer)
