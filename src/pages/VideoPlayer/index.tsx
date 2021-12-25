import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { getVideoInfo, DataType } from "../../api/getVideo";
import VideoPlayer from "./VideoPlayer";

const VideoPlayerImpure = () => {
  const [video, setVideo] = useState<DataType>({
    url: "",
    title: "",
  });
  const [loading, setLoading] = useState(false);
  const getDate = async () => {
    setLoading(true);
    try {
      const result = await getVideoInfo();
      if (!result) {
        throw new Error("not found video");
      }
      setVideo({ ...result });
      setLoading(false);
    } catch (e) {
      return e;
    }
  };

  useEffect(() => {
    getDate();
  }, []);

  if (loading) return <div>...loading</div>;
  return (
    <Container>
      <VideoPlayer video={video} />
    </Container>
  );
};

export default VideoPlayerImpure;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
