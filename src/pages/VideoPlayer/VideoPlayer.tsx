import React, { useCallback, useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import styled from "@emotion/styled/macro";
import { debounce } from "lodash";
import { DataType } from "../../api/getVideo";

const formatTime = (time: number) => {
  return dayjs(time * 1000).format("mm:ss");
};

interface VideoPlayerProps {
  video: DataType;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<HTMLDivElement>(null);

  const [opacity, setOpacity] = useState(0);

  const [currentTime, setCurrentTime] = useState(0);

  const [endTime, setEndTime] = useState(0);
  const [play, setPlay] = useState(false);

  const onToggleByPlayAndStop = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused || videoRef.current.ended) {
      console.log("재생");
      videoRef.current.play();
      setPlay(true);
    } else {
      console.log("정지");
      videoRef.current.pause();
      setPlay(false);
    }
  };

  const onToggleFullScreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      containerRef.current.requestFullscreen();
    }
  };

  const onChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Math.floor(parseInt(e.target.value, 10) / 1000);
    setCurrentTime(time);
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
  };

  const onMouseDown = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
  };

  const onMouseUp = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
  };

  const onTenSencondeJump = useCallback(() => {
    const time = currentTime + 10;
    setCurrentTime(time);
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
  }, [currentTime]);

  const onTenSencondeBack = useCallback(() => {
    const time = currentTime - 10;
    setCurrentTime(time);
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
  }, [currentTime]);

  const onKeyDown = useCallback(
    (e: any) => {
      const key = e.key;

      if (key === "ArrowLeft") {
        onTenSencondeBack();
        return;
      }

      if (key === "ArrowRight") {
        onTenSencondeJump();
        return;
      }
    },
    [onTenSencondeBack, onTenSencondeJump]
  );

  useEffect(() => {
    videoRef.current?.addEventListener("loadedmetadata", () => {
      if (!videoRef.current) return;
      const duration = videoRef.current.duration;
      const videoDuration = Math.floor(duration);
      setEndTime(videoDuration);
    });

    videoRef.current?.addEventListener("timeupdate", () => {
      if (!videoRef.current) return;
      setCurrentTime(Math.floor(videoRef.current.currentTime));
    });

    return () => {
      videoRef.current?.removeEventListener("loadedmetadata", () => {
        if (!videoRef.current) return;
        const duration = videoRef.current.duration;
        const videoDuration = Math.floor(duration);
        setEndTime(videoDuration);
      });

      videoRef.current?.removeEventListener("timeupdate", () => {
        if (!videoRef.current) return;
        setCurrentTime(Math.floor(videoRef.current.currentTime));
      });
    };
  }, [videoRef]);

  useEffect(() => {
    window.addEventListener(
      "mousemove",
      debounce(() => {
        console.log("hidden");
        if (!controllerRef.current) return;
        setOpacity(0);
      }, 3000)
    );
  }, []);

  return (
    <Wrap
      ref={containerRef}
      opacity={opacity}
      onMouseOver={() => setOpacity(1)}
      onMouseOut={() => setOpacity(0)}
    >
      <Video ref={videoRef} onClick={onToggleByPlayAndStop}>
        <source src={video.url} type="video/webm" />
        <source src={video.url} type="video/mp4" />
      </Video>
      <Controller
        {...{
          video,
          onToggleByPlayAndStop,
          onChangeCurrentTime,
          currentTime,
          endTime,
          play,
          onTenSencondeJump,
          onTenSencondeBack,
          onMouseDown,
          onMouseUp,
          onKeyDown,
          onToggleFullScreen,
          controllerRef,
          opacity,
        }}
      />
    </Wrap>
  );
};

interface ControllerProps {
  video: DataType;
  onToggleByPlayAndStop: VoidFunction;
  onTenSencondeJump: VoidFunction;
  onTenSencondeBack: VoidFunction;
  onMouseDown: VoidFunction;
  onMouseUp: VoidFunction;
  onToggleFullScreen: VoidFunction;
  onChangeCurrentTime: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: any) => void;
  currentTime: number;
  endTime: number;
  play: boolean;
  controllerRef: React.RefObject<HTMLDivElement>;
  opacity: number;
}

const Controller: React.FC<ControllerProps> = ({
  video,
  onToggleByPlayAndStop,
  onChangeCurrentTime,
  onKeyDown,
  onToggleFullScreen,
  currentTime,
  endTime,
  play,
  onTenSencondeJump,
  onTenSencondeBack,
  onMouseDown,
  onMouseUp,
  controllerRef,
  opacity,
}) => {
  return (
    <ControllerContainer ref={controllerRef} opacity={opacity}>
      <Title>{video.title}</Title>
      <TimeBar
        type="range"
        height={4}
        min={1}
        max={endTime * 1000}
        value={currentTime * 1000}
        onChange={(e) => onChangeCurrentTime(e)}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onKeyDown={onKeyDown}
      />
      <VideoController>
        <button onClick={onToggleByPlayAndStop}>
          {play ? "정지" : "재생"}
        </button>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={onTenSencondeBack}>-10</button>
          <button onClick={onTenSencondeJump}>+10</button>
        </div>
        <div>
          <p>
            {formatTime(currentTime)} / {formatTime(endTime)}
          </p>
        </div>
        <button onClick={onToggleFullScreen}>전체</button>
      </VideoController>
    </ControllerContainer>
  );
};

export default VideoPlayer;

const Video = styled.video`
  width: 100%;
  height: 100%;

  &:focus {
    outline: none !important;
  }
`;

const VideoController = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 30px;
`;

const TimeBar = styled.input`
  width: 100%;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 900;
  color: #fff;
`;

const ControllerContainer = styled.div<{ opacity: number }>`
  width: 100%;
  /* height: 60px; */
  opacity: ${(props) => props.opacity};
  transition: all 0.3s;
  position: absolute;
  bottom: 0;
  left: 0;

  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px; /* background: #999; */
  button,
  p {
    font-size: 18px;
    font-weight: 900;
    color: #fff;
  }
`;

const Wrap = styled.div<{ opacity: number }>`
  width: 1280px;
  height: 720px;
  position: relative;

  &:hover {
    ${ControllerContainer} {
      opacity: opacity;
    }
  }
`;
