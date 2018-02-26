import * as React from 'react';
import Svg,{
  Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text,
  Use,
  Defs,
  Stop
} from 'react-native-svg';

const defaultStyle = {
  alignSelf:'center'
}

export default ({  
  width=75, 
  height=75, 
  style=defaultStyle,
  backgroundColor="transparent", 
  shapeColor='#FFFFFF',
  deepBlue='#000A8B',
  hotPink='#EC008C',
}) => (
  <Svg width={width} height={width} style={style} viewBox="0 0 160 180">
    <G>
      <Path fill={shapeColor} d="M86.716,52.574c6.5-2.083,12-7.5,6.999-13.334c-6.796-7.174-28.969-9.692-35.474-0.472
        C49.511,51.142,77.88,55.406,86.716,52.574z"/>
      <G>
        <Path fill={deepBlue} d="M87.381,54.985c4.412-1.594,11.135-5.218,10.771-10.915c-0.337-5.267-3.974-8.384-8.473-10.513
          c-8.925-4.224-22.602-5.284-30.825,1.037c-7.089,5.449-5.375,13.563,1.985,17.43C68.225,55.905,79.318,57.324,87.381,54.985
          c3.09-0.896,1.775-5.722-1.329-4.821c-5.122,1.486-31.408,0.337-26.159-9.355c3.349-6.184,13.506-5.953,19.38-5.115
          c3.356,0.479,6.664,1.489,9.661,3.07c2.108,1.112,4.548,2.995,4.145,5.771c-0.437,3.007-4.626,4.763-7.026,5.63
          C83.043,51.25,84.341,56.083,87.381,54.985z"/>
      </G>
    </G>
    <G>
      <Path fill={shapeColor} d="M102.703,55.862c-11.912-3.908-27.286,0.103-37.5,5.788c-3.999,2.226-5.499,4.897-3,8.458
        c4.559,6.497,17.855,6.035,24.692,3.839c6.411-2.06,20.24-3.513,21.809-10.961C109.704,59.423,106.204,57.197,102.703,55.862z"/>
      <G>
        <Path fill={deepBlue} d="M103.368,53.451c-13.171-3.93-27.617-0.326-39.426,6.04c-3.768,2.031-7.17,6.378-4.584,10.724
          c2.626,4.413,6.908,6.381,11.834,7.261c9.737,1.74,21.08-1.647,30.188-4.981c3.718-1.361,8.291-3.816,9.476-7.945
          C112.547,58.662,108.336,55.522,103.368,53.451c-2.976-1.24-4.26,3.6-1.329,4.821c11.474,4.783-4.092,10.253-8.794,11.452
          c-6.324,1.613-12.319,3.441-18.929,3.111c-3.51-0.175-7.166-1.16-9.702-3.688c-4.206-4.192,6.795-7.81,9.381-8.805
          c8.846-3.406,18.853-4.813,28.044-2.071C105.136,59.197,106.45,54.371,103.368,53.451z"/>
      </G>
    </G>
    <G>
      <Path fill={shapeColor} d="M96.703,86.584c2.278-6.884-10.24-7.634-14.841-7.667c-7.808-0.056-14.865-3.281-22.659-3.911
        c-5.5-0.445-11.499-0.445-10.999,5.788c0.5,8.904,13,12.021,21.5,12.911C76.203,94.149,94.199,94.15,96.703,86.584z"/>
      <G>
        <Path fill={deepBlue} d="M99.113,87.249c2.872-11.706-15.171-10.277-21.891-11.217c-6.772-0.946-35.335-10.553-31.306,6.509
          c2.531,10.719,16.715,13.412,26.054,13.776C80.518,96.651,95.216,96.72,99.113,87.249c1.227-2.982-3.612-4.268-4.821-1.329
          c-2.383,5.79-14.521,5.401-19.525,5.441c-7.235,0.059-16.052-0.994-21.692-5.933c-1.369-1.199-2.166-2.841-2.371-4.635
          c-0.42-3.674,3.418-3.467,5.951-3.441c5.957,0.062,11.723,1.986,17.505,3.191c2.943,0.613,21.429,0.092,20.132,5.376
          C93.524,89.051,98.345,90.379,99.113,87.249z"/>
      </G>
    </G>
    <G>
      <Path fill={shapeColor} d="M94.07,113.271c6.14-0.901,14.569-3.018,17.166-8.774c3-6.649-6.178-8.17-11.143-10.122
        c-7.207-2.833-13.628,1.181-20.677,2.27c-5.071,0.783-14.694,1.988-13.546,8.487C67.3,113.218,82.11,115.026,94.07,113.271z"/>
      <G>
        <Path fill={deepBlue} d="M94.735,115.682c7.251-1.133,24.248-6.405,18.563-17.124c-2.019-3.808-7.956-4.989-11.624-6.252
          c-7.001-2.411-12.801-0.606-19.709,1.254c-6.89,1.855-22.45,2.612-17.946,13.993c4.078,10.304,21.437,9.373,30.051,8.219
          c3.147-0.422,3.188-5.427,0-5c-7.25,0.972-15.58,1.358-22.291-2.038c-3.308-1.674-4.873-5.278-1.14-7.399
          c2.732-1.552,6.393-1.813,9.442-2.279c4.6-0.703,8.899-2.638,13.542-3.135c3.922-0.42,8.283,1.642,11.917,3.016
          c5.329,2.014,3.54,5.924-0.519,8.471c-3.387,2.125-7.73,2.847-11.615,3.454C90.227,111.357,91.582,116.174,94.735,115.682z"/>
      </G>
    </G>
    <G>
      <Path fill={shapeColor} d="M79.636,139.94c8.546-0.158,16.778-2.798,21.664-9.273c3.891-5.157-5.873-10.814-10.249-12.548
        c-6.551-2.597-14.831-3.549-21.942-2.735c-5.47,0.626-13.142,2.508-16.814,6.437c-5.996,6.419,1.225,11.682,7.671,14.378
        C65.67,138.585,72.755,140.067,79.636,139.94z"/>
      <G>
        <Path fill={deepBlue} d="M79.636,142.44c8.168-0.293,26.868-4.469,24.801-16.103c-0.803-4.518-6.753-7.779-10.387-9.609
          c-5.711-2.876-12.306-3.854-18.627-4.112c-8.696-0.355-29.242,2.599-27.736,15.187c0.642,5.369,6.639,8.618,11.018,10.555
          C65.256,141.256,72.51,142.435,79.636,142.44c3.224,0.003,3.224-4.997,0-5c-8.288-0.006-20.902-1.581-26.363-8.793
          c-6.195-8.181,18.469-11.061,22.15-11.031c7.905,0.065,16.55,2.237,22.515,7.668c4.208,3.831-2.238,7.664-5.425,9.367
          c-3.886,2.076-8.552,2.634-12.876,2.789C76.421,137.556,76.41,142.556,79.636,142.44z"/>
      </G>
    </G>
    <G opacity="0.5">
      <G>
        <G>
          <Path fill={deepBlue} d="M106.946,160.478c1.617-5.264-26.141-4.808-28.977-4.792c-6.712,0.037-13.526,0.485-20.142,1.651
            c-1.455,0.256-6.546,1.242-4.344,3.735c1.938,2.194,7.33,2.271,9.95,2.597c6.333,0.788,12.773,0.863,19.146,0.782
            c5.432-0.069,10.918-0.313,16.302-1.077c2.409-0.342,6.338-0.497,7.963-2.657c0.776-1.032-0.962-2.027-1.727-1.009
            c-1.13,1.502-5.72,1.601-7.329,1.81c-3.939,0.511-7.921,0.712-11.887,0.854c-8.731,0.313-17.768,0.295-26.385-1.303
            c-1.291-0.239-2.559-0.576-3.792-1.026c-1.02-0.372-0.831,0.137,0.245-0.221c0.773-0.257,1.593-0.396,2.389-0.556
            c5.581-1.121,11.426-1.338,17.1-1.528c2.627-0.088,29.849,1.26,29.558,2.209C104.638,161.183,106.569,161.707,106.946,160.478z"
            />
        </G>
      </G>
      <G>
        <G>
          <Path fill={deepBlue} d="M127.467,160.643c2.914-8.486-38.499-8.925-42.566-9.029c-11.02-0.281-22.039,0.3-32.979,1.639
            c-4.215,0.516-8.422,1.183-12.547,2.199c-2.04,0.503-5.143,1.176-6.507,2.979c-4.694,6.205,25.402,9.33,28.039,9.536
            c17.108,1.341,34.764,1.035,51.739-1.596c4.032-0.625,12.43-1.284,14.72-5.491c0.617-1.133-1.11-2.142-1.727-1.009
            c-1.726,3.171-8.84,3.75-11.9,4.3c-7.587,1.365-15.343,1.875-23.034,2.209c-15.96,0.692-32.968,0.778-48.552-3.174
            c-2.345-0.595-4.669-1.37-6.774-2.575c-2.925-1.676,4.191-3.168,5.441-3.476c9.742-2.401,20.068-3.014,30.059-3.453
            c10.208-0.449,20.475-0.034,30.656,0.753c1.992,0.154,25.217,2.121,24.003,5.656
            C125.118,161.335,127.051,161.855,127.467,160.643z"/>
        </G>
      </G>
      <G>
        <G>
          <Path fill={deepBlue} d="M147.988,160.808c3.421-9.661-30.275-11.368-34.804-11.799c-22.326-2.122-44.809-2.168-67.109,0.242
            c-3.413,0.369-38.166,3.674-34.033,11.549c1.869,3.561,7.947,5.121,11.45,6.203c6.677,2.063,13.678,3.086,20.599,3.921
            c21.982,2.652,44.546,2.435,66.572,0.447c8.591-0.775,17.257-1.86,25.613-4.058c3.705-0.975,9.746-2.412,11.61-6.267
            c0.559-1.156-1.165-2.17-1.727-1.009c-1.618,3.344-7.23,4.476-10.415,5.347c-6.889,1.884-14.055,2.821-21.14,3.595
            c-17.881,1.953-36.018,2.23-53.973,1.317c-14.116-0.717-30.671-1.349-43.528-7.936c-1.791-0.917-4.664-2.361-2.147-4.167
            c2.768-1.986,6.622-2.732,9.865-3.519c10.496-2.547,21.403-3.599,32.148-4.431c17.337-1.343,34.751-0.945,52.075,0.408
            c3.377,0.264,39.371,2.966,37.013,9.624C145.628,161.495,147.561,162.015,147.988,160.808z"/>
        </G>
      </G>
    </G>
    <G>
      <Path fill={hotPink} d="M78.588,21.248c6.623,0.8,10.541-7.103,5.397-11.115C74.261,2.548,69.304,20.123,78.588,21.248z"/>
    </G>
  </Svg>
)
