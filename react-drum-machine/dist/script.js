function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const data = [
{ id: 'tabla', letter: 'Q', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/tabla/66[kb]dha-noslide.aif.mp3' },
{ id: 'big china', letter: 'W', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/other%20cymbals/196[kb]big_china_cym.aif.mp3' },
{ id: 'open cymbal', letter: 'E', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/other%20cymbals/78[kb]opencym.aif.mp3' },
{ id: 'ambient tom', letter: 'A', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/toms/307[kb]ambient_tom_2.aif.mp3' },
{ id: 'kick', letter: 'S', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/kicks/61[kb]bass-kickers-2.wav.mp3' },
{ id: 'gong', letter: 'D', src: 'http://billor.chsh.chc.edu.tw/sound/Gong.wav' },
{ id: 'timbales', letter: 'Z', src: 'https://sampleswap.org/samples-ghost/%20MAY%202014%20LATEST%20ADDITIONS/DRUMS%20and%20SINGLE%20HITS/Timbales/137[kb]TIMBALES_1.WAV.mp3' },
{ id: 'clap', letter: 'X', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/claps/70[kb]c1.aif.mp3' },
{ id: 'clean ride', letter: 'C', src: 'https://sampleswap.org/samples-ghost/DRUMS%20and%20SINGLE%20HITS/rides/87[kb]cleanride.aif.mp3' }];


class Keypad extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "handleClick",
    () => {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    });_defineProperty(this, "handleKeydown",











    e => {
      if (e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play();
        this.audio.currentTime = 0;
        this.props.handleDisplay(this.props.id);
      }
    });}componentDidMount() {console.log(this.audio);document.addEventListener('keydown', this.handleKeydown);window.focus();}componentWillUnmount() {document.removeEventListener('keydown', this.handleKeydown);}

  render() {

    return (
      React.createElement("div", { className: "drum-pad",
        id: this.props.id,
        onClick: this.handleClick },

      React.createElement("p", null, this.props.letter),
      React.createElement("audio", {
        ref: ref => this.audio = ref,
        className: "clip",
        id: this.props.letter,
        src: this.props.src })));




  }}


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDisplay",






    display => this.setState({ display }));this.state = { display: "press a key" };}
  render() {
    return (
      React.createElement("div", { id: "drum-machine" },
      React.createElement("div", { id: "display" }, " ", this.state.display),
      React.createElement("div", { id: "drum-pads" },
      data.map(x => React.createElement(Keypad, {
        id: x.id,
        letter: x.letter,
        src: x.src,
        handleDisplay: this.handleDisplay })))));







  }}



ReactDOM.render(React.createElement(App, null), document.getElementById("root"));