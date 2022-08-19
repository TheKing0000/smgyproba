import Head from 'next/head'
import Image from 'next/image'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

import WaveSvg from "../public/svgs/wave.svg"
import WaveeSvg from "../public/svgs/wavee.svg"
export default function Home() {
  return (
    <div >
      <Head>
        <title>Svábhegyi mozgásszervi gyógyulda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >

        <div className={styles.welcomePage}>
          <div>
            <Container>
              <Grid sx={{ marginTop: 1 }} container spacing={1}>
                <Grid sx={{ minHeight: { xs: "60vh", md: "100vh" } }} item md={6}>

                  <Box
                    display="flex"
                    alignItems='center'
                    justifyContent="center"
                    flexDirection='column'
                    height='100%'
                    sx={{
                      paddingBottom: {
                        sx: 0,
                        md: 15
                      }
                    }}

                  > <Typography data-aos="fade-up"
                    align='left' variant="h3" component="h1" gutterBottom>
                      Svábhegyi Mozgásszervi Gyógyulda
                    </Typography>
                    <Typography data-aos="zoom-in" align='justify' variant="subtitle1" gutterBottom component="p">
                      Mozgásszervi betegségekkel foglalkozó holisztikus rendelőnkben felkészült szakemberek várják Önt, hogy testi-lelki egészségének helyreállításához a legmegfelelőbb utat választhassák ki.
                    </Typography></Box>

                </Grid>
                <Grid sx={{ minHeight: { xs: "60vh", md: "100vh" }, width: 1 }} item md={6} >

                  <Box
                    display="flex"
                    alignItems='center'
                    justifyContent="center"
                    height="100%"

                  >
                    <Box data-aos="zoom-out-left" sx={{ width: 1, height: 1 }}>
                      <svg height="90%" width="90%" viewBox="0 0 996 785" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="kezdolap" clipPath="url(#clip0_2_2)">
                          <path id="Vector" d="M822.269 701.96C822.346 701.834 822.43 701.711 822.52 701.593C822.741 701.079 823.02 700.59 823.351 700.136L850.861 662.152L873.528 630.87H912.19L909.457 634.636L904.591 641.358L889.514 662.163L857.203 706.762L887.152 766.134C888.376 768.551 886.288 772.025 882.515 773.881L868.071 780.982C866.637 781.704 865.056 782.095 863.446 782.126C861.413 782.126 859.718 781.381 859.007 779.967L821.777 706.158C821.483 705.476 821.374 704.731 821.461 703.995C821.547 703.259 821.826 702.558 822.269 701.96Z" fill="#0099FF" />
                          <path id="Vector_2" d="M874.295 699.685L835.347 685.403C833.582 684.753 832.15 683.439 831.365 681.748C830.58 680.058 830.506 678.129 831.161 676.385L842.585 646.039C843.244 644.297 844.576 642.884 846.289 642.109C848.002 641.334 849.956 641.262 851.723 641.907L890.671 656.189C892.436 656.839 893.869 658.153 894.653 659.844C895.438 661.534 895.512 663.463 894.858 665.207L883.433 695.553C883.108 696.416 882.614 697.208 881.979 697.883C881.344 698.558 880.58 699.103 879.731 699.487C878.883 699.871 877.966 700.086 877.033 700.119C876.101 700.153 875.17 700.006 874.295 699.685H874.295Z" fill="#2F2E41" />
                          <path id="Vector_3" d="M841.177 682.816C840.914 682.816 840.653 682.769 840.407 682.677H840.407C839.865 682.474 839.426 682.067 839.188 681.546C838.949 681.024 838.93 680.431 839.134 679.895L853.434 642.547C853.639 642.011 854.052 641.578 854.58 641.342C855.109 641.107 855.711 641.088 856.253 641.291C856.796 641.493 857.235 641.9 857.473 642.421C857.712 642.943 857.731 643.537 857.526 644.072L843.225 681.421C843.068 681.831 842.787 682.184 842.422 682.434C842.056 682.683 841.622 682.816 841.177 682.816Z" fill="white" />
                          <path id="Vector_4" d="M904.022 776.568V641.671C904.019 641.546 904.027 641.42 904.046 641.296C904.112 639.731 904.641 638.219 905.566 636.947C906.492 635.674 907.774 634.697 909.255 634.134C910.199 633.765 911.207 633.576 912.223 633.578H928.362C930.536 633.58 932.621 634.434 934.158 635.951C935.695 637.468 936.56 639.525 936.562 641.671V776.568C936.56 778.714 935.695 780.771 934.158 782.288C932.621 783.806 930.536 784.659 928.362 784.661H912.223C910.049 784.659 907.964 783.806 906.427 782.288C904.89 780.771 904.025 778.714 904.022 776.568Z" fill="#0099FF" />
                          <path id="Vector_5" d="M895.265 692.378V660.005C895.267 658.146 896.016 656.363 897.349 655.048C898.681 653.733 900.487 652.993 902.372 652.991H943.921C945.805 652.993 947.612 653.733 948.944 655.048C950.277 656.363 951.026 658.146 951.028 660.005V692.378C951.026 694.237 950.277 696.02 948.944 697.335C947.612 698.65 945.805 699.39 943.921 699.392H902.372C900.487 699.39 898.681 698.65 897.349 697.335C896.016 696.02 895.267 694.237 895.265 692.378Z" fill="#2F2E41" />
                          <path id="Vector_6" d="M927.055 695.975C926.475 695.975 925.92 695.747 925.51 695.342C925.1 694.938 924.869 694.389 924.868 693.817V653.891C924.868 653.318 925.099 652.769 925.509 652.365C925.919 651.96 926.475 651.733 927.055 651.733C927.635 651.733 928.191 651.96 928.602 652.365C929.012 652.769 929.242 653.318 929.242 653.891V693.817C929.241 694.389 929.011 694.938 928.601 695.342C928.191 695.747 927.635 695.975 927.055 695.975Z" fill="white" />
                          <g id="integet">
                            <g id="kar">
                              <path id="Vector_7" d="M852.338 539.065L732.787 478.238C730.858 477.25 729.403 475.548 728.742 473.505C728.081 471.462 728.267 469.243 729.259 467.335L736.651 453.176C737.652 451.273 739.376 449.838 741.446 449.186C743.517 448.534 745.764 448.717 747.698 449.697L867.252 510.525C867.853 510.829 868.411 511.209 868.912 511.655C870.285 512.844 871.215 514.452 871.553 516.224C871.891 517.995 871.618 519.827 870.777 521.428L863.385 535.586C862.892 536.532 862.215 537.372 861.392 538.059C860.569 538.746 859.617 539.265 858.589 539.587C857.776 539.837 856.929 539.965 856.077 539.967C854.776 539.966 853.493 539.657 852.338 539.065Z" fill="#0099FF" />
                            </g>
                            <path id="Vector_8" d="M854.662 542.563L796.539 519.915C794.598 518.952 793.123 517.269 792.437 515.235C791.751 513.201 791.91 510.982 792.879 509.063L806.133 482.102C807.113 480.189 808.818 478.734 810.879 478.055C811.915 477.717 813.01 477.587 814.098 477.672C815.186 477.756 816.246 478.054 817.216 478.548L869.704 509.95C869.908 510.051 870.096 510.18 870.263 510.334C871.601 511.522 872.267 514.374 872.802 516.664L872.887 517.02C873.033 517.634 873.159 518.164 873.287 518.536L873.33 518.678C873.377 518.829 873.425 518.986 873.457 519.129C873.926 520.998 873.702 522.972 872.824 524.692L865.586 538.925C864.895 540.266 863.843 541.393 862.546 542.182C861.248 542.971 859.755 543.392 858.231 543.399C856.991 543.401 855.769 543.115 854.662 542.563Z" fill="#2F2E41" />
                          </g>
                          <path id="Vector_9" d="M897.537 468.679C929.855 468.679 956.055 442.823 956.055 410.927C956.055 379.032 929.855 353.175 897.537 353.175C865.218 353.175 839.018 379.032 839.018 410.927C839.018 442.823 865.218 468.679 897.537 468.679Z" fill="#0099FF" />
                          <path id="Vector_10" d="M900.953 442.044L901.014 439.886C896.945 439.774 893.359 439.522 890.664 437.579C889.9 436.997 889.272 436.259 888.822 435.416C888.373 434.573 888.113 433.644 888.06 432.693C888.013 432.111 888.102 431.527 888.32 430.986C888.539 430.444 888.881 429.959 889.32 429.569C891.11 428.078 893.988 428.561 896.086 429.51L897.896 430.329L894.426 405.304L892.26 405.597L895.211 426.884C892.36 426.057 889.718 426.413 887.909 427.921C887.214 428.52 886.669 429.269 886.316 430.109C885.963 430.95 885.812 431.86 885.875 432.768C885.939 434.047 886.285 435.295 886.889 436.427C887.494 437.56 888.342 438.548 889.374 439.322C892.837 441.82 897.337 441.944 900.953 442.044Z" fill="#2F2E41" />
                          <path id="Vector_11" d="M881.545 407.433H869.767V409.591H881.545V407.433Z" fill="#2F2E41" />
                          <path id="Vector_12" d="M918.721 407.433H906.943V409.591H918.721V407.433Z" fill="#2F2E41" />
                          <path id="Vector_13" d="M844.192 662.675C840.328 662.455 837.314 656.185 837.314 648.321V547.24C837.313 542.318 837.939 537.414 839.179 532.646L839.179 532.645C839.63 530.931 840.165 529.226 840.768 527.582C844.439 517.459 850.883 508.539 859.383 501.814C860.343 501.04 861.347 500.291 862.366 499.589C867.317 496.141 872.78 493.471 878.56 491.674C878.4 490.963 878.318 490.237 878.317 489.509C878.32 486.791 879.415 484.185 881.363 482.264C883.31 480.342 885.95 479.261 888.704 479.258H904.012C906.766 479.261 909.406 480.342 911.353 482.264C913.301 484.185 914.396 486.791 914.399 489.509C914.397 490.236 914.316 490.96 914.157 491.67C926.121 495.408 936.568 502.81 943.984 512.801C951.4 522.793 955.399 534.855 955.402 547.24V648.321C955.402 656.386 952.28 662.703 948.295 662.703H844.421C844.344 662.704 844.267 662.695 844.192 662.675Z" fill="#2F2E41" />
                          <path id="Vector_14" d="M911.812 671.902C911.132 670.725 910.763 669.399 910.737 668.044L908.437 535.323C908.417 534.26 908.61 533.204 909.005 532.215C909.4 531.225 909.988 530.323 910.737 529.559L910.739 529.557C911.487 528.792 912.38 528.18 913.367 527.756C914.355 527.332 915.417 527.105 916.494 527.086L932.632 526.819C934.666 526.783 936.64 527.494 938.171 528.815C939.703 530.135 940.682 531.97 940.919 533.963C940.953 534.229 940.971 534.496 940.972 534.764L943.281 667.494C943.312 669.639 942.48 671.71 940.969 673.251C939.457 674.793 937.388 675.682 935.215 675.722L919.081 675.996C917.61 676.018 916.159 675.649 914.88 674.929C913.602 674.209 912.542 673.164 911.812 671.902V671.902Z" fill="#0099FF" />
                          <path id="Vector_15" d="M905.029 580.761C904.418 579.7 904.058 578.517 903.975 577.299L904.664 515.809C904.496 513.67 905.196 511.552 906.608 509.921C908.021 508.289 910.032 507.278 912.199 507.108L928.287 505.864C930.245 505.716 932.192 506.263 933.779 507.405C933.944 507.528 934.109 507.679 934.27 507.786C934.672 508.116 935.091 508.426 935.525 508.714L935.874 508.959C938.186 510.574 940.808 512.405 940.935 514.19L950.613 574.182C950.758 575.895 950.338 577.608 949.415 579.066C949.198 579.424 948.95 579.763 948.674 580.08C948.433 580.36 948.169 580.622 947.886 580.861C946.551 582.046 944.856 582.761 943.066 582.894L912.788 584.822C911.238 584.94 909.686 584.621 908.312 583.902C906.939 583.183 905.8 582.093 905.029 580.761V580.761Z" fill="#2F2E41" />
                          <path id="Vector_16" d="M848.33 648.495C847.75 648.495 847.194 648.267 846.784 647.863C846.374 647.458 846.144 646.909 846.143 646.337V541.666C846.143 541.093 846.374 540.544 846.784 540.139C847.194 539.735 847.75 539.507 848.33 539.507C848.91 539.507 849.466 539.735 849.876 540.139C850.286 540.544 850.517 541.093 850.517 541.666V646.337C850.516 646.909 850.286 647.458 849.876 647.863C849.466 648.267 848.91 648.495 848.33 648.495Z" fill="white" />
                          <path id="Vector_17" d="M950.609 397.208L848.951 360.506C848.411 360.311 847.916 360.013 847.493 359.63C847.07 359.246 846.728 358.784 846.486 358.27C846.245 357.756 846.108 357.2 846.084 356.633C846.059 356.067 846.149 355.501 846.346 354.969L846.69 353.364C854.629 331.946 880.944 318.467 902.646 326.302L933.929 337.597C955.631 345.432 965.063 370.794 957.124 392.212L956.219 394.638C955.82 395.713 955.005 396.587 953.953 397.07C952.901 397.552 951.698 397.602 950.609 397.208Z" fill="#2F2E41" />
                          <path id="Vector_18" d="M956.085 399.245C814.393 404.404 802.012 386.834 845.185 359.206L854.344 342.574L959.311 380.342L956.085 399.245Z" fill="#2F2E41" />
                          <path id="Vector_19" d="M928.302 334.963C929.084 332.394 925.733 329.13 920.818 327.672C915.902 326.214 911.283 327.113 910.501 329.682C909.718 332.25 913.069 335.514 917.985 336.973C922.9 338.431 927.52 337.531 928.302 334.963Z" fill="#2F2E41" />
                          <g id="korok">
                            <g id="bicikli">
                              <path id="Vector_20" d="M415.43 68C326.962 68 255 135.791 255 219.129C254.975 240.462 259.77 261.555 269.067 281.008C294.209 333.576 350.347 370.258 415.43 370.258C457.971 370.236 498.763 354.307 528.844 325.969C558.926 297.632 575.836 259.204 575.859 219.129C575.859 135.791 503.884 68 415.43 68ZM548.163 279.883C536.048 303.338 517.181 323.113 493.712 336.955C470.244 350.796 443.118 358.147 415.43 358.168C352.888 358.168 299.304 321.329 277.858 269.473C271.211 253.428 267.812 236.353 267.834 219.129C267.834 142.464 334.047 80.0903 415.43 80.0903C496.812 80.0903 563.025 142.464 563.025 219.129C563.053 240.183 557.969 260.964 548.163 279.883Z" fill="#E6E6E6" />
                              <g id="bicikliszel">
                                <path id="Vector_21" d="M415.43 370.707C385.041 370.683 355.28 362.564 329.581 347.286C303.883 332.008 283.295 310.194 270.196 284.363C269.674 283.333 269.447 282.192 269.538 281.054C269.629 279.915 270.036 278.819 270.718 277.875L270.804 277.757C271.484 276.828 272.412 276.084 273.494 275.6C274.576 275.116 275.775 274.909 276.969 274.999C278.163 275.088 279.311 275.473 280.298 276.113C281.284 276.753 282.075 277.626 282.59 278.645C306.93 326.681 359.072 357.72 415.43 357.72C441.184 357.658 466.474 351.254 488.791 339.143C511.107 327.032 529.674 309.635 542.651 288.678C543.254 287.694 544.123 286.877 545.17 286.312C546.217 285.747 547.404 285.453 548.61 285.46C549.804 285.457 550.977 285.754 552.008 286.32C553.039 286.887 553.892 287.702 554.477 288.682L554.552 288.806C555.146 289.795 555.455 290.913 555.449 292.049C555.442 293.185 555.121 294.3 554.516 295.283C540.319 318.182 520.016 337.189 495.62 350.418C471.223 363.648 443.58 370.642 415.43 370.707Z" fill="#0099FF" />
                              </g>
                              <path id="Vector_22" d="M379.27 232.952C383.631 232.925 387.866 234.325 391.253 236.913C394.64 239.5 396.968 243.115 397.841 247.14C398.713 251.165 398.076 255.35 396.038 258.982C393.999 262.613 390.686 265.465 386.664 267.052C382.641 268.638 378.159 268.86 373.982 267.68C369.805 266.5 366.193 263.99 363.761 260.58C361.33 257.17 360.23 253.071 360.65 248.982C361.07 244.893 362.983 241.069 366.063 238.161C367.789 236.513 369.846 235.204 372.113 234.31C374.38 233.416 376.812 232.954 379.27 232.952ZM379.27 225.396C373.981 225.393 368.809 226.868 364.41 229.634C360.01 232.4 356.58 236.333 354.554 240.935C352.527 245.537 351.995 250.602 353.024 255.49C354.053 260.377 356.597 264.868 360.335 268.393C364.073 271.918 368.837 274.32 374.024 275.294C379.211 276.269 384.589 275.773 389.476 273.868C394.364 271.964 398.543 268.737 401.484 264.596C404.425 260.454 405.996 255.584 405.999 250.602C406.002 243.92 403.188 237.511 398.176 232.784C393.163 228.057 386.363 225.399 379.27 225.396H379.27ZM434.991 189.367C437.41 189.379 439.734 188.485 441.454 186.882C443.173 185.278 444.146 183.098 444.158 180.819C444.158 180.79 444.158 180.761 444.158 180.732C444.169 179.615 443.947 178.508 443.504 177.472C443.061 176.437 442.406 175.494 441.576 174.697C440.746 173.9 439.757 173.265 438.667 172.828C437.576 172.391 436.405 172.16 435.22 172.15C435.163 172.149 435.105 172.149 435.048 172.15C432.624 172.128 430.291 173.014 428.561 174.614C426.831 176.213 425.846 178.394 425.823 180.677C425.8 182.96 426.741 185.159 428.439 186.788C430.136 188.418 432.452 189.346 434.876 189.367C434.914 189.367 434.952 189.368 434.991 189.367ZM454.156 232.952C458.517 232.925 462.752 234.325 466.139 236.913C469.526 239.5 471.854 243.115 472.727 247.14C473.6 251.165 472.962 255.35 470.924 258.982C468.886 262.613 465.572 265.465 461.55 267.052C457.528 268.638 453.045 268.86 448.868 267.68C444.692 266.5 441.079 263.99 438.648 260.58C436.216 257.17 435.116 253.071 435.536 248.982C435.956 244.893 437.869 241.068 440.949 238.161C442.676 236.513 444.732 235.204 446.999 234.31C449.266 233.416 451.699 232.954 454.156 232.952ZM454.156 225.396C448.87 225.396 443.702 226.872 439.307 229.639C434.911 232.406 431.485 236.338 429.462 240.939C427.439 245.54 426.91 250.603 427.941 255.487C428.972 260.371 431.518 264.858 435.256 268.379C438.994 271.901 443.757 274.299 448.942 275.27C454.127 276.242 459.501 275.743 464.385 273.837C469.269 271.932 473.443 268.704 476.38 264.564C479.317 260.423 480.885 255.555 480.885 250.575C480.885 247.268 480.194 243.994 478.85 240.939C477.507 237.884 475.538 235.109 473.056 232.77C470.574 230.432 467.628 228.578 464.385 227.312C461.142 226.047 457.666 225.396 454.156 225.396Z" fill="#E6E6E6" />
                              <path id="Vector_23" d="M448.799 206.693H435.048L426.597 190.474C425.915 189.337 424.962 188.364 423.813 187.632C422.665 186.9 421.352 186.43 419.977 186.257C418.603 186.084 417.204 186.215 415.892 186.637C414.58 187.06 413.39 187.764 412.416 188.693L391.875 207.341C390.194 208.958 389.239 211.123 389.211 213.386C389.211 218.082 392.821 219.755 394.511 220.7C407.546 227.771 412.129 228.553 412.129 232.089V249.873C412.129 251.018 412.612 252.117 413.472 252.926C414.331 253.736 415.497 254.191 416.713 254.191C417.929 254.191 419.095 253.736 419.954 252.926C420.814 252.117 421.297 251.018 421.297 249.873V225.585C421.297 222.022 412.588 219.108 407.46 215.329L421.469 201.431C426.826 209.122 429.29 215.329 432.355 215.329H448.799C450.015 215.331 451.181 214.878 452.042 214.07C452.903 213.261 453.388 212.164 453.39 211.018C453.392 209.873 452.911 208.774 452.053 207.963C451.194 207.152 450.029 206.695 448.814 206.693H448.799V206.693Z" fill="#E6E6E6" />
                            </g>
                            <g id="sulyzo">
                              <path id="Vector_24" d="M279.95 451.755C276.002 451.755 272.732 462.585 272.099 476.785H196.135C195.502 462.585 192.233 451.755 188.284 451.755C183.882 451.755 180.313 465.203 180.313 481.791C180.313 498.379 183.882 511.826 188.284 511.826C192.233 511.826 195.502 500.997 196.135 486.797H272.099C272.732 500.997 276.002 511.826 279.95 511.826C284.352 511.826 287.921 498.379 287.921 481.791C287.921 465.203 284.352 451.755 279.95 451.755Z" fill="#E6E6E6" />
                              <path id="Vector_25" d="M316.953 437.445C305.694 418.435 287.465 403.944 265.68 396.683C243.896 389.422 220.048 389.891 198.604 398.001C177.16 406.111 159.588 421.307 149.181 440.742C138.773 460.178 136.242 482.52 142.063 503.587C147.883 524.654 161.655 542.999 180.801 555.189C199.946 567.379 223.151 572.577 246.072 569.81C268.992 567.042 290.056 556.5 305.319 540.156C320.583 523.812 328.999 502.787 328.991 481.019C328.986 465.765 324.842 450.766 316.953 437.445ZM233.966 563.366C210.934 563.255 188.89 554.544 172.667 539.144C156.444 523.743 147.366 502.91 147.426 481.213C147.486 459.517 156.677 438.728 172.984 423.407C189.292 408.086 211.384 399.482 234.416 399.484C257.447 399.485 279.538 408.091 295.844 423.415C312.149 438.738 321.338 459.528 321.394 481.224C321.451 502.92 312.371 523.752 296.146 539.151C279.92 554.55 257.875 563.258 234.843 563.366C234.551 563.367 234.258 563.367 233.966 563.366Z" fill="#E6E6E6" />
                              <path id="Vector_26" d="M234.012 570.984C215.906 570.992 198.172 566.142 182.886 557C182.123 556.541 181.533 555.866 181.203 555.072L181.156 554.955C180.824 554.168 180.769 553.302 181 552.483C181.231 551.665 181.735 550.938 182.437 550.41C183.116 549.872 183.961 549.554 184.847 549.503C185.732 549.452 186.612 549.671 187.356 550.127C203.603 559.869 222.826 564.251 242.004 562.584C261.182 560.917 279.229 553.295 293.309 540.916C307.39 528.537 316.706 512.103 319.794 494.195C322.882 476.286 319.568 457.919 310.371 441.978C309.94 441.247 309.769 440.405 309.885 439.576C310 438.747 310.395 437.975 311.011 437.373C311.62 436.75 312.426 436.326 313.309 436.166C314.193 436.006 315.107 436.118 315.918 436.484L316.038 436.537C316.851 436.896 317.523 437.489 317.956 438.231C325.828 451.926 329.79 467.312 329.453 482.883C329.117 498.454 324.493 513.676 316.036 527.058C307.579 540.44 295.577 551.523 281.206 559.224C266.836 566.924 250.589 570.976 234.056 570.984H234.012Z" fill="#0099FF" />
                            </g>
                            <g id="sziv">
                              <path id="Vector_27" d="M583.972 391.518C571.491 391.513 559.131 393.824 547.598 398.319C536.066 402.815 525.586 409.406 516.758 417.717C507.93 426.028 500.926 435.896 496.147 446.758C491.368 457.619 488.907 469.261 488.905 481.019C488.902 492.776 491.359 504.419 496.134 515.282C500.909 526.145 507.908 536.015 516.733 544.33C525.558 552.644 536.036 559.239 547.567 563.738C559.098 568.237 571.456 570.553 583.938 570.552H583.972C584.588 570.552 585.191 570.552 585.807 570.528C610.846 570.073 634.682 560.326 652.133 543.405C669.583 526.484 679.237 503.757 678.996 480.167C678.754 456.576 668.636 434.029 650.841 417.429C633.047 400.828 609.015 391.516 583.972 391.518V391.518ZM603.339 561.339C591.345 563.905 578.91 564.057 566.849 561.787C554.788 559.517 543.371 554.874 533.344 548.163C523.317 541.452 514.907 532.823 508.662 522.841C502.418 512.858 498.48 501.747 497.105 490.233C495.73 478.719 496.951 467.061 500.686 456.021C504.421 444.982 510.587 434.809 518.781 426.167C526.974 417.526 537.012 410.611 548.236 405.873C559.461 401.136 571.621 398.683 583.921 398.675H583.972C605.472 398.674 626.218 406.136 642.246 419.635C658.273 433.134 668.459 451.723 670.855 471.85C673.251 491.977 667.691 512.23 655.236 528.739C642.781 545.247 624.305 556.853 603.339 561.339Z" fill="#E6E6E6" />
                              <path id="Vector_28" d="M583.972 571C560.404 571 537.668 562.79 520.138 547.95C502.608 533.11 491.522 512.688 489.013 490.612C486.504 468.536 492.748 446.365 506.546 428.365C520.343 410.366 540.718 397.807 563.753 393.107C564.319 392.992 564.904 392.985 565.474 393.086L565.672 393.121C566.628 393.296 567.49 393.775 568.114 394.48C568.738 395.184 569.084 396.069 569.096 396.986C569.107 397.903 568.782 398.795 568.176 399.513C567.57 400.23 566.72 400.729 565.769 400.924C544.771 405.165 526.183 416.575 513.583 432.956C500.983 449.337 495.263 469.531 497.525 489.648C499.787 509.764 509.87 528.381 525.834 541.912C541.797 555.443 562.511 562.931 583.985 562.934C584.825 562.926 585.641 562.923 586.47 562.9C587.395 562.864 588.304 563.135 589.037 563.667C589.77 564.199 590.281 564.957 590.481 565.808C590.7 566.63 590.603 567.499 590.207 568.261C589.811 569.022 589.142 569.627 588.318 569.968V569.969C587.758 570.21 587.196 570.447 586.632 570.68C586.157 570.878 585.644 570.985 585.124 570.994C584.741 571 584.359 571 583.972 571Z" fill="#0099FF" />
                              <path id="Vector_29" d="M630.851 477.229C628.319 477.109 625.816 477.773 623.722 479.12C621.628 480.466 620.06 482.42 619.255 484.685H609.897L603.065 465.331C602.812 464.606 602.322 463.974 601.665 463.527C601.009 463.079 600.219 462.838 599.408 462.838H599.336C598.514 462.85 597.718 463.113 597.067 463.587C596.417 464.061 595.947 464.72 595.728 465.467L585.022 500.662L572.44 429.479C572.294 428.655 571.852 427.903 571.187 427.351C570.523 426.798 569.676 426.477 568.79 426.442C567.904 426.408 567.033 426.661 566.322 427.161C565.611 427.66 565.104 428.375 564.886 429.184L552.136 484.685H537.846C536.825 484.685 535.846 485.067 535.124 485.747C534.402 486.427 533.997 487.349 533.997 488.311C533.997 489.273 534.402 490.195 535.124 490.875C535.846 491.555 536.825 491.937 537.846 491.937H555.167C556.024 491.938 556.858 491.669 557.533 491.172C558.209 490.675 558.689 489.979 558.896 489.195L567.893 447.904L580.235 517.681C580.376 518.494 580.809 519.237 581.461 519.786C582.113 520.334 582.946 520.655 583.819 520.696H584.036C584.872 520.695 585.686 520.438 586.354 519.964C587.022 519.49 587.509 518.824 587.74 518.067L599.697 478.725L603.474 489.444C603.731 490.167 604.222 490.796 604.878 491.243C605.534 491.69 606.321 491.932 607.131 491.937H619.424C620.159 493.771 621.406 495.383 623.033 496.604C624.661 497.825 626.608 498.61 628.67 498.874C630.732 499.139 632.831 498.874 634.746 498.107C636.661 497.341 638.32 496.101 639.549 494.519C640.778 492.938 641.531 491.073 641.727 489.121C641.924 487.17 641.557 485.205 640.666 483.434C639.775 481.663 638.393 480.151 636.665 479.059C634.937 477.967 632.929 477.334 630.851 477.229H630.851Z" fill="#E6E6E6" />
                            </g>
                          </g>
                          <path id="Vector_30" d="M994.907 785H794.813C794.523 785 794.245 784.886 794.04 784.684C793.835 784.482 793.72 784.207 793.72 783.921C793.72 783.635 793.835 783.36 794.04 783.158C794.245 782.955 794.523 782.842 794.813 782.842H994.907C995.197 782.842 995.475 782.955 995.68 783.158C995.885 783.36 996 783.635 996 783.921C996 784.207 995.885 784.482 995.68 784.684C995.475 784.886 995.197 785 994.907 785Z" fill="#3F3D56" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_2">
                            <rect width="996" height="785" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </Box>
                  </Box>

                </Grid>
              </Grid>
            </Container>
          </div>
        </div>

        <Box sx={{ position: 'relative', height: "10vh" }}>
          <WaveSvg className={styles.waveSvg} />
        </Box>
        <Box sx={{ position: 'relative', height: "50vh" }}>
          <WaveeSvg className={styles.waveeSvg} />
        </Box>

      </main >
    </div >
  )
}
