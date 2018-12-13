import React                from 'react'
import { G, Path, Polygon } from 'react-native-svg'

const SvgIcons = {
  Book: {
    svg: (
      <G>
        <Path
          d="M54.745,51.791l-3.281-20.815c-0.363-2.058-1.619-4.075-3.297-5.581l-1.234-8.459
            c-0.21-1.438-1.425-2.514-2.832-2.607l-1.071-6.014c-0.146-0.821-0.619-1.499-1.299-1.86c-0.604-0.321-1.321-0.351-2.007-0.122
            c-0.356-1.911-1.357-3.312-2.828-3.946c-1.493-0.645-3.223-0.397-4.852,0.675l-15.709,9.727c-0.005,0.003-0.264,0.187-0.649,0.445
            c-1.423-0.805-3.066-1.09-4.695-0.801c-0.171,0.03-0.34,0.066-0.507,0.108c-1.646,0.414-3.072,1.394-4.054,2.798
            c-0.833,1.189-1.272,2.573-1.281,3.995c-0.003,0.427,0.033,0.857,0.109,1.286l5.417,30.721c0.328,1.858,1.36,3.479,2.907,4.562
            c3.02,2.116,7.138,1.531,9.468-1.245l25.562,3.187c0.438,0.081,0.866,0.122,1.278,0.122c1.407,0,2.64-0.471,3.552-1.374
            C54.621,55.422,55.083,53.711,54.745,51.791z M8.165,25.18c2.596,1.817,5.996,1.635,8.379-0.209l4.995,28.333
            c-1.662,2.03-4.628,2.486-6.811,0.957c-1.109-0.776-1.849-1.938-2.084-3.271L8.083,25.122C8.11,25.142,8.137,25.161,8.165,25.18z
            M18.387,23.907l22.881,0.702l1.936,0.361c2.897,0.541,5.778,3.451,6.287,6.334l3.281,20.815c0.224,1.272-0.038,2.355-0.737,3.049
            c-0.7,0.692-1.79,0.939-3.116,0.697l-25.457-3.175L18.387,23.907z M40.583,8.171c0.077,0,0.147,0.016,0.208,0.048
            c0.136,0.072,0.231,0.229,0.27,0.444l1.042,5.849l-21.767,2.571l19.936-8.839C40.382,8.195,40.487,8.171,40.583,8.171z
            M8.068,16.483c0.776-1.108,1.938-1.849,3.271-2.083c1.332-0.237,2.678,0.063,3.787,0.84l0.551,0.386l0.565-0.365
            c0.672-0.435,1.2-0.807,1.201-0.81L33.12,4.746c1.071-0.706,2.129-0.892,2.983-0.524c0.853,0.368,1.444,1.266,1.667,2.529
            l0.068,0.385L15.3,17.128c-0.421,0.187-1.541,0.683-1.267,1.682c0.273,1,1.491,0.856,1.947,0.802l27.805-3.284
            c0.552-0.064,1.088,0.345,1.169,0.896l0.965,6.612c-0.758-0.391-1.548-0.682-2.348-0.832l-2.012-0.375l-24.88-0.775l-0.31,0.442
            c-1.604,2.289-4.77,2.849-7.059,1.245c-1.109-0.776-1.849-1.938-2.084-3.271c-0.065-0.368-0.089-0.736-0.074-1.101
            C7.193,18.213,7.505,17.287,8.068,16.483z"
        />
        <Path
          d="M44.809,39.611c-0.004-0.006-0.005-0.013-0.01-0.018c0.339-3.325-1.018-6.764-4.131-8.783
            c-2.332-1.512-4.899-1.826-7.3-1.229c0.205-0.807,0.407-1.615,0.615-2.421c0.148-0.572-1.041-0.44-1.176,0.082
            c-0.236,0.91-0.464,1.823-0.695,2.736c-1.593,0.626-3.075,1.656-4.315,3.013c-3.478,3.808-3.022,9.733,0.384,13.229
            c-0.646,0.269-1.294,0.536-1.94,0.807c-0.733,0.308-0.083,0.941,0.515,0.69c0.697-0.293,1.398-0.582,2.096-0.873
            c0.154,0.13,0.303,0.264,0.466,0.384c3.918,2.88,9.565,0.869,12.883-1.924c1.215-1.289,2.012-2.843,2.392-4.473
            c0.41,0.352,0.817,0.708,1.228,1.058c0.358,0.304,1.447-0.163,1.068-0.485C46.194,40.812,45.502,40.21,44.809,39.611z
            M32.996,31.047c3.543,2.783,6.947,5.763,10.358,8.717c-4.502,2.046-9.085,3.931-13.656,5.826
            C30.658,40.714,31.787,35.868,32.996,31.047z M43.675,38.634c-3.396-2.946-6.79-5.91-10.335-8.659
            C38.053,29.112,43.248,33.54,43.675,38.634z M28.245,33.865c1.061-1.789,2.367-2.897,3.765-3.483
            c-1.211,4.797-2.344,9.617-3.319,14.466C26.449,42.169,25.804,37.982,28.245,33.865z M30.229,46.272
            c4.476-1.855,8.961-3.703,13.373-5.7c-0.254,1.542-0.98,3.091-2.333,4.526C37.275,48.461,33.088,48.3,30.229,46.272z"
        />
        <Path
          d="M33.464,41.004c1.801,1.479,4.155,0.242,4.416-2.008c0.201-1.734-1.189-2.632-2.719-2.799
            C32.387,35.893,31.542,39.424,33.464,41.004z"
        />
      </G>
    ),
    viewBox: '0 0 60 60',
  },
  Audio: {
    svg: (
      <G>
        <Path
          d="M25.984,15.388c-0.696,0-1.311,0.321-1.856,0.871c-0.012,0.011-0.028,0.016-0.04,0.028
          c-0.004,0.003-0.019,0.019-0.021,0.022c-0.001,0.001-0.001,0.002-0.002,0.003c-0.002,0.002-0.004,0.002-0.006,0.004
          c-4.098,4.33-7.994,6.435-11.91,6.435H8.044c-3.013,0-5.463,2.451-5.463,5.463v3.571c0,3.013,2.45,5.463,5.463,5.463h4.104
          c3.921,0,7.815,2.104,11.908,6.433c0.001,0.001,0.001,0.002,0.002,0.002c0.007,0.01,0.006,0.005,0.006,0.007
          c0.001,0.001,0.002,0.001,0.002,0.002h0.001c0,0.001,0.001,0.002,0.002,0.003s0.001,0.001,0.002,0.002s0.002,0.002,0.002,0.002
          c0,0.001,0.001,0.001,0.001,0.001c0,0.001,0.001,0.001,0.002,0.002s0.001,0.001,0.002,0.002c0,0,0,0.001,0.001,0.001l0.001,0.001
          c0.001,0.001,0.001,0.001,0.001,0.001c0,0,0.001,0.001,0.001,0.001l0.001,0.001l0.001,0.001l0.001,0.001
          c0,0,0.001,0.001,0.001,0.001c0,0,0.001,0.001,0.001,0.001c0.001,0.001,0.001,0.001,0.002,0.002c0,0,0.001,0.001,0.001,0.001
          c0,0,0.001,0.001,0.001,0.001c0,0,0.001,0.001,0.001,0.001c0,0,0.002,0.002,0.002,0.002l0.001,0.001c0,0,0,0,0.001,0.001
          c0,0,0.001,0,0.001,0.001c0.001,0.001,0.002,0.002,0.002,0.002c0.001,0,0.001,0.001,0.002,0.002s0.002,0.001,0.003,0.002
          c0.004,0.003,0.002,0.003,0.002,0.003c0.003,0,0.004,0.002,0.003,0.002c0,0.001,0.001,0.001,0.002,0.002s0.002,0.002,0.003,0.002
          c0.007,0.006,0.016,0.007,0.022,0.013c0.543,0.546,1.156,0.863,1.849,0.863c3.446,0,5.017-7.575,5.017-14.613
          C31.001,22.962,29.431,15.388,25.984,15.388z M25.984,42.613c-0.111,0-0.24-0.066-0.381-0.195
          c-0.001-0.002-0.002-0.004-0.003-0.006c-0.009-0.012-0.021-0.024-0.032-0.036c0,0,0,0,0-0.001c0,0-0.001-0.001-0.002-0.002
          c0-0.001-0.001-0.001-0.002-0.002c0,0-0.001-0.001-0.002-0.003c-0.001-0.001-0.001-0.002-0.002-0.002v-0.001
          c-0.001,0-0.001-0.001-0.002-0.002s-0.001-0.002-0.002-0.002V42.36c-0.001,0-0.001-0.001-0.002-0.002
          c-0.014-0.017-0.028-0.033-0.044-0.05c-0.144-0.152-0.288-0.353-0.43-0.589c-0.062-0.106-0.124-0.215-0.187-0.34
          c-0.004-0.007-0.007-0.014-0.011-0.021c-0.332-0.662-0.675-1.584-0.977-2.763c-0.003-0.014-0.007-0.028-0.01-0.042
          c-0.06-0.236-0.117-0.488-0.174-0.745c-0.029-0.135-0.058-0.273-0.086-0.413c-0.027-0.131-0.052-0.267-0.078-0.404
          c-0.039-0.213-0.078-0.426-0.114-0.649c-0.006-0.039-0.012-0.079-0.018-0.118c-0.13-0.823-0.236-1.713-0.314-2.659
          c-0.008-0.099-0.017-0.195-0.024-0.295c-0.018-0.24-0.033-0.486-0.047-0.733c-0.012-0.208-0.022-0.42-0.031-0.635
          c-0.008-0.189-0.016-0.377-0.022-0.569C22.977,30.9,22.968,30.459,22.968,30c0-0.459,0.009-0.9,0.021-1.334
          c0.006-0.192,0.014-0.379,0.022-0.567c0.009-0.216,0.019-0.429,0.031-0.638c0.014-0.246,0.029-0.49,0.047-0.729
          c0.008-0.103,0.017-0.202,0.025-0.303c0.077-0.938,0.183-1.822,0.311-2.64c0.007-0.044,0.014-0.091,0.021-0.135
          c0.035-0.219,0.074-0.428,0.112-0.637c0.026-0.141,0.053-0.282,0.08-0.418c0.027-0.136,0.055-0.27,0.083-0.401
          c0.057-0.262,0.116-0.519,0.177-0.76c0.002-0.009,0.004-0.019,0.007-0.028c0.302-1.18,0.645-2.103,0.977-2.765
          c0.005-0.009,0.009-0.018,0.014-0.027c0.062-0.122,0.123-0.229,0.184-0.333c0.143-0.237,0.287-0.438,0.431-0.591
          c0,0,0-0.001,0.001-0.001c0,0,0,0,0,0c0.004-0.004,0.005-0.009,0.008-0.013c0.032-0.033,0.064-0.067,0.09-0.101
          c0.138-0.124,0.265-0.19,0.374-0.19c0.902,0,3.017,4.291,3.017,12.613S26.887,42.613,25.984,42.613z"
        />
        <Path
          d="M48.896,29.999c0.001-7.253-4.232-13.955-10.786-17.072l-0.859,1.806c5.86,2.788,9.646,8.781,9.646,15.267
          c0.001,6.489-3.785,12.483-9.645,15.269l0.859,1.807C44.664,43.957,48.897,37.255,48.896,29.999z"
        />
        <Path
          d="M34.494,20.538l-0.859,1.806c2.939,1.398,4.838,4.403,4.837,7.656c0.001,3.253-1.897,6.258-4.837,7.656
          l0.859,1.807c3.632-1.728,5.979-5.441,5.978-9.462C40.473,25.979,38.126,22.265,34.494,20.538z"
        />
        <Path
          d="M41.769,5.225l-0.859,1.807C49.725,11.223,55.42,20.239,55.419,30c0,9.76-5.695,18.775-14.511,22.968
          l0.859,1.807C51.275,50.252,57.419,40.527,57.419,30C57.42,19.471,51.276,9.746,41.769,5.225z"
        />
      </G>
    ),
    viewBox: '0 0 60 60',
  },
  AudioMuted: {
    svg: (
      <G>
        <Path
          d="M46.414,26l7.293-7.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L45,24.586l-7.293-7.293
		c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L43.586,26l-7.293,7.293c-0.391,0.391-0.391,1.023,0,1.414
		C36.488,34.902,36.744,35,37,35s0.512-0.098,0.707-0.293L45,27.414l7.293,7.293C52.488,34.902,52.744,35,53,35
		s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L46.414,26z"
        />
        <Path
          d="M28.404,4.4c-0.975-0.552-2.131-0.534-3.09,0.044c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,16H1c-0.553,0-1,0.447-1,1v19
		c0,0.266,0.105,0.52,0.293,0.707S0.734,37,1,37l10.61-0.005l13.543,12.44c0.05,0.046,0.104,0.086,0.161,0.12
		c0.492,0.297,1.037,0.446,1.582,0.446c0.517-0.001,1.033-0.134,1.508-0.402C29.403,49.035,30,48.005,30,46.844V7.156
		C30,5.995,29.403,4.965,28.404,4.4z M28,46.844c0,0.431-0.217,0.81-0.579,1.015c-0.155,0.087-0.548,0.255-1,0.026L13,35.556V31
		c0-0.553-0.447-1-1-1s-1,0.447-1,1v3.996L2,35V18h9v4c0,0.553,0.447,1,1,1s1-0.447,1-1v-4.536l13.405-11.34
		c0.46-0.242,0.86-0.07,1.016,0.018C27.783,6.347,28,6.725,28,7.156V46.844z"
        />
      </G>
    ),
    viewBox: '0 0 60 60',
  },
  AudioError: {
    svg: (
      <G>
        <Path
          d="M31.98,18.735c-0.883,0-1.662,0.415-2.351,1.123c-0.017,0.016-0.039,0.022-0.055,0.039
          c-5.123,5.413-9.993,8.044-14.889,8.044H9.555c-3.766,0-6.829,3.063-6.829,6.829v4.463c0,3.766,3.063,6.829,6.829,6.829h5.131
          c4.899,0,9.768,2.629,14.883,8.038c0.003,0.003,0.01,0.011,0.011,0.012c0.016,0.016,0.037,0.022,0.053,0.037
          c0.688,0.706,1.466,1.119,2.348,1.119c4.309,0,6.271-9.469,6.271-18.266S36.289,18.735,31.98,18.735z M31.98,52.767
          c-1.128,0-3.771-5.364-3.771-15.766s2.643-15.766,3.771-15.766s3.771,5.364,3.771,15.766S33.108,52.767,31.98,52.767z"
        />
        <Polygon
          points="70.908,25.095 69.141,23.328 57.236,35.233 45.331,23.328 43.563,25.095 55.468,37 43.563,48.905
          45.331,50.673 57.236,38.768 69.141,50.673 70.908,48.905 59.003,37 	"
        />
      </G>
    ),
    viewBox: '0 0 74 74',
  },
  Help: {
    svg: (
        <G>
            <Path d="M51.1400778,8.87719298 C39.4785992,-2.80701754 20.5214008,-2.80701754 8.85992218,8.87719298 C-2.80155642,20.5614035 -2.80155642,39.5672515 8.85992218,51.2397661 C14.6848249,57.0760234 22.3424125,60 30,60 C37.6575875,60 45.3151751,57.0760234 51.1400778,51.2397661 C62.8015564,39.5555556 62.8015564,20.5614035 51.1400778,8.87719298 Z M49.1322957,49.2280702 C38.5797665,59.8011696 21.4202335,59.7894737 10.8793774,49.2280702 C0.326848249,38.6549708 0.326848249,21.4619883 10.8793774,10.9005848 C16.1439689,5.61403509 23.077821,2.97076023 30,2.97076023 C36.922179,2.97076023 43.8560311,5.61403509 49.1322957,10.9005848 C59.6731518,21.4619883 59.6731518,38.6549708 49.1322957,49.2280702 Z" />
            <Path d="M30,12.9356725 C25.5875486,12.9356725 21.9922179,16.5380117 21.9922179,20.9590643 C21.9922179,21.7426901 22.6342412,22.3859649 23.4163424,22.3859649 C24.1984436,22.3859649 24.8404669,21.7426901 24.8404669,20.9590643 C24.8404669,18.1052632 27.1634241,15.7894737 30.0116732,15.7894737 C32.8599222,15.7894737 35.1712062,18.1169591 35.1712062,20.9590643 L35.1712062,21.5672515 C35.1712062,23.5087719 34.1089494,25.2748538 32.381323,26.1637427 C30.0350195,27.380117 28.5875486,29.9532164 28.5875486,32.877193 L28.5875486,33.251462 C28.5875486,34.0350877 29.229572,34.6783626 30.0116732,34.6783626 C30.7937743,34.6783626 31.4357977,34.0350877 31.4357977,33.251462 L31.4357977,32.877193 C31.4357977,31.0526316 32.3229572,29.4035088 33.7003891,28.6900585 C36.3735409,27.3099415 38.0311284,24.5730994 38.0311284,21.5555556 L38.0311284,20.9473684 C38.0077821,16.5380117 34.4124514,12.9356725 30,12.9356725 Z" />
            <Path d="M30,40.3976608 C29.2178988,40.3976608 28.5758755,41.0409357 28.5758755,41.8245614 L28.5758755,45.7426901 C28.5758755,46.5263158 29.2178988,47.1695906 30,47.1695906 C30.7821012,47.1695906 31.4241245,46.5263158 31.4241245,45.7426901 L31.4241245,41.8245614 C31.4241245,41.0409357 30.7821012,40.3976608 30,40.3976608 Z" />
        </G>


    ),
    viewBox: '0 0 60 60',
  },
  Form: {
    svg: (
      
      <G>
            <Polygon id="Shape" points="0 0 0 40 16.5 50 33 40 33 0"/>
            <Path d="M0,10 L33,10" />
        </G>

      
    ),
    viewBox: '0 0 50 50',
  },
}

export default SvgIcons

