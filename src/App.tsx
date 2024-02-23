
import Drum from './Drum'
import { AudioClip } from './types'
import './App.css'

const audioClips: AudioClip[] = [
  {
    KeyTrigger: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    description: 'Heater 1'
  },
  {
    KeyTrigger: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    description: 'Heater 2'
  },
  {
    KeyTrigger: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    description: 'Heater 3'
  },
  {
    KeyTrigger: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    description: 'Heater 4'
  },
  {
    KeyTrigger: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description: 'Clap'
  },
  {
    KeyTrigger: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description: 'Open HH'
  },
  {
    KeyTrigger: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description: "Kick n' Hat"
  },
  {
    KeyTrigger: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description: 'Kick'
  },
  {
    KeyTrigger: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description: 'Closed HH'
  }
]

function App() {

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find(
      (clip) => clip.KeyTrigger === e.key.toUpperCase()
    );
    if (!clip) return;
    (document.getElementById(clip.KeyTrigger)  as HTMLAudioElement)
    .play()
    .catch(console.error);

    document.getElementById('Drum-' + clip.KeyTrigger)?.focus();
    document.getElementById('display')!.innerText = clip.description;
};
  

  return (
    <div className="container" id="drum-machine" onKeyDown={playAudio}>
      <h1>Drum Machine</h1>
      <div className="whole-drum">
        {audioClips.map((clip) => (
          <Drum audioClip={clip} key={clip.KeyTrigger} />
        ))}
      </div>
      <div id="display"></div>
    </div>
  )
}

export default App;


