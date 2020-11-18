/** @format */

import React from 'react'
import { RellaxWrapper } from 'react-rellax-wrapper'
import { useStyles } from 'react-treat'
import * as styleRefs from './Blobs.treat'

function Blobs() {
  const styles = useStyles(styleRefs)

  return (
    <div className={styles.blobWrapper} aria-hidden="true">
      <RellaxWrapper speed={-2}>
        <svg
          className={styles.blobA}
          width="898"
          height="905"
          viewBox="0 0 898 905"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M303.562 171.625C367.988 142.553 437.632 133.477 506.377 149.91C571.2 165.406 619.002 210.26 665.39 258.117C726.112 320.762 810.231 376.538 810.617 463.781C811.04 559.382 755.283 662.05 667.344 699.552C584.87 734.723 505.611 649.243 417.761 631.316C333.435 614.108 234.295 657.333 171.588 598.385C102.237 533.19 72.3692 423.998 100.49 333.063C127.049 247.18 221.622 208.6 303.562 171.625Z"
            fill="currentcolor"
          />
        </svg>
      </RellaxWrapper>

      <RellaxWrapper speed={-3}>
        <svg
          className={styles.blobB}
          width="845"
          height="831"
          viewBox="0 0 845 831"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M674.338 227.837C715.609 296.654 725.479 378.156 709.297 456.751C693.394 533.995 657.759 613.036 587.612 649.078C522.137 682.719 448.78 640.406 376.243 627.876C301.495 614.964 218.839 627.838 163.614 575.835C97.8574 513.914 36.098 420.258 64.8266 334.625C93.0177 250.595 211.775 254.767 287.035 207.951C356.054 165.017 399.678 71.6618 480.854 75.8297C566.005 80.2018 630.486 154.715 674.338 227.837Z"
            fill="currentcolor"
          />
        </svg>
      </RellaxWrapper>

      <RellaxWrapper speed={-1}>
        <svg
          className={styles.blobC}
          width="557"
          height="685"
          viewBox="0 0 557 685"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M269.578 1.36233C358.868 -9.4455 445.887 45.4938 502.912 115.047C555.395 179.06 561.553 265.94 554.091 348.381C547.395 422.362 512.202 486.309 464.18 542.982C410.323 606.54 352.707 689.585 269.578 684.144C187.471 678.771 150.388 583.246 98.8839 519.075C56.1065 465.777 2.45857 416.682 0.0922319 348.381C-2.33602 278.293 43.6176 220.824 86.6317 165.434C138.861 98.1779 185.04 11.595 269.578 1.36233Z"
            fill="currentcolor"
          />
        </svg>
      </RellaxWrapper>

      <RellaxWrapper speed={-3}>
        <svg
          className={styles.blobD}
          width="116"
          height="118"
          viewBox="0 0 116 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M63.7858 0.0343397C88.2565 0.825633 106.421 20.5586 113.526 43.8878C120.165 65.6873 113.248 89.0251 95.1201 102.922C75.2048 118.189 48.0485 124.105 27.2893 109.997C4.7409 94.6721 -5.56791 66.1236 2.99839 40.3137C11.4419 14.8739 36.8911 -0.835335 63.7858 0.0343397Z"
            fill="currentcolor"
          />
        </svg>
      </RellaxWrapper>
    </div>
  )
}

export default Blobs
