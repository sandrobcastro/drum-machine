import { AudioClip } from './types'

interface DrumProps {
    audioClip: AudioClip;
}

const Drum = ({audioClip}: DrumProps) => {
    const playSound = (clip: AudioClip) => {
        (document.getElementById(clip.KeyTrigger)  as HTMLAudioElement)
        .play()
        .catch(console.error)

        document.getElementById('display')!.innerText = clip.description;
    }

    return (
      <button
        className='drum-pad'
        id={ `drum-${audioClip.description}`}
        onClick={() => playSound(audioClip)}
      >
       <audio src={audioClip.url} className='clip' id={audioClip.KeyTrigger} />
         {audioClip.KeyTrigger} 
      </button>
    )
  }

  export default Drum;