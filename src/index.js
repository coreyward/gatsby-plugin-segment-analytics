import React from "react"
import PropTypes from "prop-types"

function OutboundLink({ eventName, categoryName, ...props }) {
  return (
    <a
      {...props}
      onClick={(e) => {
        if (typeof props.onClick === `function`) {
          props.onClick(e)
        }
        let redirect = true
        if (
          e.button !== 0 ||
          e.altKey ||
          e.ctrlKey ||
          e.metaKey ||
          e.shiftKey ||
          e.defaultPrevented
        ) {
          redirect = false
        }
        if (props.target && props.target.toLowerCase() !== `_self`) {
          redirect = false
        }
        if (window.analytics) {
          window.analytics.track(
            eventName || "Click",
            {
              category: categoryName || `Outbound Link`,
              label: props.href,
            },
            null,
            () => {
              if (redirect) {
                document.location = props.href
              }
            }
          )
        } else {
          if (redirect) {
            document.location = props.href
          }
        }

        return false
      }}
    />
  )
}

OutboundLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  eventName: PropTypes.string,
  categoryName: PropTypes.string,
}

export { OutboundLink }
