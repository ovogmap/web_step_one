function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type DataType = {
  url: string;
  title: string;
};

export async function getVideoInfo() {
  await delay(500);
  const data: DataType = {
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    title: "Big Buck Bunny",
  };
  return data;
}
