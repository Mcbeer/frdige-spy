import React from "react";
import "./SlideInComponent.scss";

export const SlideInComponent = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: any;
}) => {
  // const transitions = useTransition(show, null, {
  //   from: { transform: "translateX(900px)" },
  //   enter: { transform: "translateX(0px)" },
  //   leave: { transform: "translateX(900px)" },
  // });
  // return (
  //   <>
  //     {transitions.map(
  //       ({ item, key, props }) =>
  //         item && (
  //           <animated.div
  //             className="SlideInComponent"
  //             onClick={setShow}
  //             style={props}
  //           >
  //             <div className="SlideInComponent__content">
  //               Something is in here
  //             </div>
  //           </animated.div>
  //         )
  //     )}
  //   </>
  // );

  return <div></div>;
};
