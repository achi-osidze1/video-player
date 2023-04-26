import Video from './components/Video';

function App() {

  const videoPlayer = [
    {
      title : 'The Batman 2022',
      IMDb : "IMDb 7.8",
      url : 'https://www.youtube.com/watch?v=mqqft2x_Aa4'
    }
  ]

  return (
    <div className="App">
      {videoPlayer.map((m,index) => <Video
        key={index}
        title={m.title}
        IMDb={m.IMDb}
        url={m.url}
        />)
        }
    </div>
  );
}

export default App;
