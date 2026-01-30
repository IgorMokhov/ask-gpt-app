import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface IUseSpeechOptions {
  language?: string;
  continuous?: boolean;
}

export const useSpeech = (options: IUseSpeechOptions = {}) => {
  const { language = 'ru-RU', continuous = true } = options;

  const {
    transcript,
    finalTranscript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
  } = useSpeechRecognition();

  const start = () => SpeechRecognition.startListening({ continuous, language });
  const stop = () => SpeechRecognition.stopListening();

  return {
    transcript,
    isSupported: browserSupportsSpeechRecognition,
    isListening: listening,
    finalText: finalTranscript,
    reset: resetTranscript,
    start,
    stop,
  };
};
