import React from "react";
import Svg, {
  Defs,
  Path,
  Ellipse,
  LinearGradient,
  Stop,
  G,
  Mask,
  Use,
  Rect,
} from "react-native-svg";
import getWindowDimensions from "../logic/getWindowDimensions";

const { width } = getWindowDimensions();
const ConnectNanoXIllustration = (props) => (
  <Svg
    width={width * 0.7}
    height={((width * 0.7) / 194) * 149}
    viewBox="0 0 194 149"
    {...props}
  >
    <Defs>
      <Path
        id="prefix__a"
        d="M3.53.52l51.082 5.415a1.48 1.48 0 0 1 1.314 1.63L54.6 20.314a1.479 1.479 0 0 1-1.622 1.321h-.002L1.893 16.221A1.482 1.482 0 0 1 .58 14.59L1.906 1.84A1.479 1.479 0 0 1 3.529.519h.001V.52z"
      />
      <Ellipse id="prefix__d" cx={9.11} cy={8.875} rx={4.282} ry={4.317} />
      <Ellipse id="prefix__f" cx={48.258} cy={13.316} rx={4.282} ry={4.317} />
      <LinearGradient
        id="prefix__h"
        x1="50%"
        x2="50%"
        y1="100.845%"
        y2="2.104%"
      >
        <Stop offset="0%" stopColor="#165EDB" />
        <Stop offset="100%" stopColor="#99B9FF" />
      </LinearGradient>
    </Defs>
    <G fill="none" fillRule="evenodd">
      <Path
        fill="#F8B692"
        fillRule="nonzero"
        d="M189.51 126.164c.316 2.342 1.718 4.139 4.205 15.497a2.894 2.894 0 0 1-1.106 2.947c-1.769 1.305-3.563 2.261-5.384 2.87-5.006 1.673-13.485.008-13.508 0-1.182-.449-1.89-2.689-3.241-6.785l-1.165-2.876 2.546-30.397-6.418-37.898 1.546-11.398 3.708-1.622c4.522-.459 7.585.056 9.187 1.544 3.928 3.649 5.092 9.455 6.626 15.698 1.38 5.614 3.79 9.518 4.829 15.887 1.011 6.204-3.107 27.012-1.824 36.533zM160.544 71.45l3.848.487-1.288 9.772c.476 4.566-.2 7.632-2.028 9.197-1.055.903-2.546.514-2.914-.06-.588-.919.681-2.777.166-5.215-.673-3.18-.811-8.305.747-10.544 1.038-1.493 1.528-2.706 1.469-3.637z"
      />
      <Path
        fill="#F29575"
        fillRule="nonzero"
        d="M163.51 82.598c1.428 1.653 2.077 2.683 1.946 3.09-.36 1.119-1.516 1.824-2.485 2.75-.778.743-.502 1.185-1.989 2.625.327-1.246.04-2.367.088-2.975.101-1.291-.1-1.395.049-1.884-.246.412-.997 1.362-2.39.52-.248-.15-.392-.379-.433-.687l5.214-3.439z"
      />
      <Path
        fill="#FFA583"
        fillRule="nonzero"
        d="M162.053 67.048l2.434-1.292-.59 10.787c-.11 4.886-1.293 8.041-3.547 9.465-3.382 2.134-3.05-2.812-4.413-7.583-1.363-4.771-1.294-9.904.756-12.278 1.367-1.584 3.154-1.283 5.36.901z"
      />
      <Path
        fill="#FFC7B1"
        fillRule="nonzero"
        d="M162.053 67.048l2.434-1.292-.59 10.787c-.11 4.886-1.293 8.041-3.547 9.465-3.382 2.134-3.05-2.812-4.413-7.583-1.363-4.771-1.294-9.904.756-12.278 1.367-1.584 3.154-1.283 5.36.901z"
      />
      <Path
        fill="#F29575"
        fillRule="nonzero"
        d="M155.716 74.485l7.291-4.096c-.137 6.578-.29 10.95-.46 13.115-.492-1.998-.394-4.277-.485-5.183-.092-.905-.214-1.405-1.205-2.216.806.062.713.218 1.054 0 .342-.22.09-1.357.007-3.186-2.464 2.48-4.531 3.001-6.202 1.566z"
      />
      <Path
        fill="#FFA583"
        fillRule="nonzero"
        d="M164.42 57.621l2.724-.377-2.985 10.864c-2.753 4.969-5.344 7.222-7.774 6.76-3.644-.693-1.52-3.388-1.18-8.346.34-4.957 1.61-7.545 4.34-9.072 1.821-1.018 3.545-2.644 4.875.171z"
      />
      <Path
        fill="#F29575"
        fillRule="nonzero"
        d="M173.765 68.6c-1.388-2.965 0-1.56.56-.937.847 1.55 1.99 3.163 3.43 4.838-1.734-.623-3.064-1.923-3.99-3.9z"
      />
      <G transform="rotate(-6 593.032 -1102.936)">
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Use fill="#383838" fillRule="nonzero" xlinkHref="#prefix__a" />
        <G fillRule="nonzero" mask="url(#prefix__b)">
          <Use fill="#000" filter="url(#prefix__c)" xlinkHref="#prefix__d" />
          <Use stroke="#2E2E2E" strokeWidth={0.5} xlinkHref="#prefix__d" />
        </G>
        <Path
          fill="#000"
          fillRule="nonzero"
          d="M53.62 18.702L29.5 57.62a.982.982 0 0 1-1.357.317l-.003-.002-11.611-7.315a.991.991 0 0 1-.313-1.36L40.34 10.334c2.279-3.677 7.095-4.803 10.758-2.514l.023.015c3.671 2.312 4.788 7.171 2.498 10.866z"
          mask="url(#prefix__b)"
        />
        <Path
          fill="#D6D6D6"
          fillRule="nonzero"
          d="M55.423 16.199L37.106 57.677a1.475 1.475 0 0 1-1.949.754l-.004-.001-11.608-5.211a1.486 1.486 0 0 1-.748-1.956l18.32-41.486c1.75-3.96 6.364-5.747 10.308-3.991l.021.01c3.954 1.774 5.732 6.427 3.977 10.403z"
        />
        <G fillRule="nonzero">
          <Use fill="#000" filter="url(#prefix__e)" xlinkHref="#prefix__f" />
          <Use stroke="#D0D0D0" strokeWidth={0.5} xlinkHref="#prefix__f" />
        </G>
      </G>
      <Path
        fill="#F29575"
        fillRule="nonzero"
        d="M178.046 78.4c-1.308 2.187-1.955 4.207-1.94 6.058.024 2.778-.802-1.122-.58-2.901.148-1.187.988-2.239 2.52-3.156z"
      />
      <G fillRule="nonzero">
        <Path
          fill="#C1C1C1"
          d="M167.734 59.544c2.005-.164 2.471 16.758-1.858 22.531-.434.578-2.727 17.877-4.538 26.29-.61 2.83-1.274 2.108-3.183 1.495.003-4.616 2.965-22.13 2.985-24.407.017-1.842.353-15.757 1.285-18.711.933-2.954 1.903-6.608 5.309-7.198z"
        />
        <Path
          fill="#F8B692"
          d="M169.564 138.624c-1.388-5.14-3.706-11.1-6.953-17.878-4.872-10.167-.264-27.532-.055-36.173.208-8.642-.403-24.573 5.178-25.029 3.72-.304 5.991 5.349 6.813 16.958.87 11.863 1.883 19.135 3.038 21.816 1.13 2.624 3.55 8.627 3.42 17.137-.087 5.674-3.9 13.397-11.441 23.17z"
        />
      </G>
      <Path
        fill="#F29575"
        fillRule="nonzero"
        d="M173.833 69.948l.714 6.554c.87 11.863 1.883 19.135 3.038 21.816-.976-4.79-1.866-14.654-2.67-29.593l-1.082 1.223z"
      />
      <Path
        fill="#F8B692"
        fillRule="nonzero"
        d="M60.128 49.305c2.917-1.952 5.547-2.928 7.89-2.928 3.512 0 4.305 3.283 1.904 6.052-2.4 2.77-5.57 6.737-8.642 9.256-2.048 1.68-2.432-2.447-1.152-12.38z"
      />
      <Path
        fill="#FA8B69"
        fillRule="nonzero"
        d="M60.087 49.039c1.655-.835 3.088-1.464 4.298-1.888l-.66 11.952c-.984 1.009-1.833 1.808-2.547 2.398-3.019 2.494-1.9-8.847-1.091-12.462z"
      />
      <Path
        fill="#F8B692"
        fillRule="nonzero"
        d="M5.701 121.704c0-4.204-1.73-9.006-2.788-14.816-1.11-6.099-1.27-12.668-.481-16.752 2.02-10.451 10.29-22.996 10.29-28.104 0-5.11-1.155-12.383 2.019-11.522 3.173.862 3.941 3.508 4.615 5.832.674 2.324 1.827 10.748 0 16.752-1.827 6.003-4.214 10.748-1.442 14.039 1.848 2.193 13.195 3.776 34.041 4.746l7.434 17.333c-.084-.193-1.824 1.937-5.222 6.391-3.398 4.455-8.197 10.41-14.398 17.865l-4.272 8.42c-.093.184-.23.343-.396.464-4.166 3.01-9.414 4.515-15.745 4.515-9.691 0-16.17-1.18-19.356-4.578 0-1.181 5.701-16.381 5.701-20.585z"
      />
      <G transform="translate(17.31 16)">
        <Rect
          width={46.113}
          height={94.421}
          x={0.144}
          fill="#2B2B2B"
          fillRule="nonzero"
          rx={5.97}
        />
        <Rect
          width={42.271}
          height={75.653}
          x={1.797}
          y={8.1}
          fill="#F5F5F5"
          fillRule="nonzero"
          rx={0.578}
        />
        <G filter="url(#prefix__g)" transform="translate(11.664 35.1)">
          <Rect width={23.4} height={23.4} fill="#FFF" rx={11.7} />
          <Path
            fill="url(#prefix__h)"
            fillRule="nonzero"
            d="M4.167 11.278c-1.414.834-2.125 1.248-2.132 1.24A7.45 7.45 0 0 1 7.12.01a.345.345 0 0 1 .361.344l.004 1.654a.383.383 0 0 1-.355.383 5.073 5.073 0 0 0-2.963 8.889z"
            transform="translate(4.205 4.205)"
          />
          <Path
            fill="#6490F1"
            d="M7.1 14.586l.86-2.132a.366.366 0 0 1 .477-.202l1.525.617a.366.366 0 0 1 .202.476l-1.118 2.767c-.045.112-.1.218-.161.317a1.645 1.645 0 0 1-2.671.262l-.003-.001-.12-.135a7.397 7.397 0 0 1-1.172-1.81 1.19 1.19 0 0 0 .909.63 1.189 1.189 0 0 0 1.272-.789z"
          />
          <Path
            fill="url(#prefix__h)"
            fillRule="nonzero"
            d="M4.167 11.278c-1.414.834-2.125 1.248-2.132 1.24A7.45 7.45 0 0 1 7.12.01a.345.345 0 0 1 .361.344l.004 1.654a.383.383 0 0 1-.355.383 5.073 5.073 0 0 0-2.963 8.889z"
            transform="rotate(180 9.598 9.598)"
          />
          <Path
            fill="#6490F1"
            d="M16.3 8.814l-.86 2.132a.366.366 0 0 1-.477.202l-1.525-.617a.366.366 0 0 1-.202-.476l1.118-2.767c.045-.112.1-.218.161-.317a1.645 1.645 0 0 1 2.671-.262l.003.001.12.135a7.397 7.397 0 0 1 1.172 1.81 1.19 1.19 0 0 0-.909-.63 1.189 1.189 0 0 0-1.272.789z"
          />
        </G>
        <Ellipse
          cx={23.057}
          cy={88.423}
          fill="#3A3A3A"
          fillRule="nonzero"
          rx={3.074}
          ry={3.096}
        />
        <G
          fill="#3A3A3A"
          fillRule="nonzero"
          transform="translate(18.253 3.096)"
        >
          <Ellipse cx={0.769} cy={0.774} rx={1} ry={1} />
          <Rect width={6.148} height={1} x={3.459} y={0.387} rx={0.385} />
        </G>
      </G>
      <Path
        fill="#000"
        fillOpacity={0.05}
        fillRule="nonzero"
        d="M14.056 63.187c0-5.106-1.148-12.377 2.008-11.516 3.156.861 4.303 3.603 4.973 5.926.67 2.323 2.486 11.518 0 19.637-.741 2.42-2.334 5.105-3.634 8.227v-9.765c-2.232-4.935-3.347-9.104-3.347-12.509z"
      />
      <Path
        fill="#F8B692"
        fillRule="nonzero"
        d="M2.967 106.713c-.576-6.263-1.27-12.629-.48-16.7C4.504 79.593 12.77 67.089 12.77 61.996S11.617 49.65 14.79 50.51c3.171.859 3.94 3.497 4.613 5.813.674 2.317 1.826 10.715 0 16.7-1.603 5.255-3.57 9.305-2.236 12.73.794 2.04-1.976 4.163-1.976 5.804-.142 2.197-.046 5.978 0 8.439.081 4.311-11.871 10.544-12.223 6.717zm67.05-19.626c.387.33.66 1.005.82 2.024.241 1.53-.588 3.615-2.804 6.221-2.217 2.606-6.316 5.439-7.345 4.605-1.029-.833-.26-3.13.122-5.215.364-.577 3.433-3.122 9.207-7.635z"
      />
      <Path
        fill="#FA8B69"
        fillRule="nonzero"
        d="M70.54 88.278c-1.21 2.128-3.321 3.796-4.476 4.74-1.155.944-4.516 4.16-5.54 2.034-1.024-2.127-.092-3.618 1.036-6.11.837-1.851 5.09-3.139 7.29-2.696.96.194 1.594 1.451 1.69 2.032z"
      />
      <Path
        fill="#F8B692"
        fillRule="nonzero"
        d="M66.943 74.24c1.05.651 2.341 1.69 3.873 3.115 2.299 2.138 2.035 4.367 1.341 6.505-.694 2.138-5.458 7.774-6.368 8.648-.91.875-3.812 3.79-5.123 2.819-1.31-.972-.527-3.596.288-6.22.543-1.749 1.404-3.66 2.585-5.733V76.57l3.404-2.332z"
      />
      <Path
        fill="#FA8B69"
        fillRule="nonzero"
        d="M63.424 83.333l1.922-3.483a21.83 21.83 0 0 1-1.922 2.225v1.258z"
      />
      <Path
        fill="#000"
        fillOpacity={0.05}
        fillRule="nonzero"
        d="M67.724 64.038c-1.766-1.293-1.59-1.358.525-.194 3.173 1.745 3.654 4.17 2.98 6.012-.673 1.843-3.157 4.006-5.369 5.849-2.212 1.842-6.939 5.207-7.708 3.073-.77-2.133.049-5.237 1.25-7.08.8-1.228 3.575-3.781 8.322-7.66z"
      />
      <Path
        fill="#F8B692"
        fillRule="nonzero"
        d="M63.45 61.856c2.291.337 4.487 1.086 6.587 2.245 3.15 1.738 2.493 4.346 2.005 5.795-.488 1.448-2.18 4.182-4.376 6.017s-6.89 5.186-7.653 3.061c-.764-2.124.477-5.698 1.241-7.05.51-.902 1.241-2.222 2.196-3.96v-6.108z"
      />
      <Path
        fill="#FA8B69"
        fillRule="nonzero"
        d="M63.424 68.048l2.498-3.483c-1.048 1.096-1.881 1.838-2.498 2.225v1.258zm5.078 7.352c-2.344 1.741-4.036 2.967-5.078 3.676 2.978-.967 5.078-1.838 5.957-2.999a6.532 6.532 0 0 0-.88-.677zM26.15 110.42c-.308 2.516-1.442 5.031-4.42 7.74 2.065-1.935 3.44-6.288 3.266-7.74h1.153zm-9.24-29.796c-1.172 4.025-.975 7.444.593 10.255v-4.6c-.296-.642-.395-.671-.592-1.342-.198-1.022-.198-2.46 0-4.313z"
      />
      <G stroke="#6490F1" strokeLinecap="round" strokeWidth={1.35}>
        <Path d="M122.845 47.813a9.032 9.032 0 0 0-9.032 9.032" />
        <Path
          d="M122.845 43.297c-7.482 0-13.548 6.066-13.548 13.548"
          opacity={0.5}
        />
        <Path
          d="M123.484 38.516c-10.476 0-18.968 8.492-18.968 18.968"
          opacity={0.1}
        />
      </G>
      <G stroke="#6490F1" strokeLinecap="round" strokeWidth={1.35}>
        <Path d="M69.187 19.845a9.032 9.032 0 0 0-9.032-9.032" />
        <Path
          d="M73.703 19.845c0-7.482-6.066-13.548-13.548-13.548"
          opacity={0.5}
        />
        <Path
          d="M78.484 20.484c0-10.476-8.492-18.968-18.968-18.968"
          opacity={0.1}
        />
      </G>
    </G>
  </Svg>
);

export default ConnectNanoXIllustration;
