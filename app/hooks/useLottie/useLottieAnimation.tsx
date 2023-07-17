import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";

interface LottieAnmimationProps {
  animationData: any;
  loop?: boolean;
  speed?: number;
  initialSegment?: [number, number] | undefined;
  width?: number | string;
  height?: number | string;
}

export function useLottieAnimation({
  animationData: animationUrl,
  loop,
  speed: speedAnimation,
  initialSegment,
  width,
  height,
}: LottieAnmimationProps) {
  const lottieRef = useRef<any>();

  const [speed, setSpeed] = useState<number>(
    speedAnimation ? speedAnimation : 1
  );
  const [onCompleteSegments, setOnCompleteSegments] = useState<any>();

  const playSegments = (segments: [number, number], flagForce: boolean) => {
    lottieRef.current?.playSegments(segments, flagForce);
  };

  const goToAndPlay = (frame: number, isFrame: boolean) => {
    lottieRef.current?.goToAndPlay(frame, isFrame);
  };

  const goToAndStop = (frame: number, isFrame: boolean) => {
    lottieRef.current?.goToAndStop(frame, isFrame);
  };

  const play = () => {
    lottieRef.current?.play();
  };

  const stop = () => {
    lottieRef.current?.stop();
  };

  const destroy = () => {
    lottieRef.current?.destroy();
  };

  useEffect(() => {
    lottieRef.current?.setSpeed(speed);
  }, [speed]);

  const [lottieView] = useState(
    <Lottie
      lottieRef={lottieRef}
      animationData={animationUrl}
      loop={loop}
      autoplay
      initialSegment={initialSegment}
      style={{ width: width, height: height }}
    />
  );

  return {
    lottieView,
    playSegments,
    setOnCompleteSegments,
    play,
    stop,
    destroy,
    goToAndPlay,
    goToAndStop,
    setSpeed,
    currentFrame: lottieRef?.current?.animationItem?.currentFrame,
  };
}
