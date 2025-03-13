import { _decorator, Component, Node, AudioClip, AudioSource } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('SoundController')
export class SoundController extends Component {

    @property(AudioSource)
    private audioSource: AudioSource = null!

    @property({type:AudioClip})
    public correct = null;

    @property({type:AudioClip})
    public wrong = null;

    @property({type:AudioClip})
    public letter1 = null;

    @property({type:AudioClip})
    public letter2 = null;

    @property({type:AudioClip})
    public letter3 = null;

    @property({type:AudioClip})
    public hint = null;

    @property({type:AudioClip})
    public shuffle = null;

    play(clip: AudioClip) {
        this.audioSource.playOneShot(clip, 1);
    }
}

