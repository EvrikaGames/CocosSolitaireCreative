import { _decorator, Component, Node } from 'cc';
import super_html_playable from './super_html_playable';
const { ccclass, property } = _decorator;

@ccclass('StoreController')
export class StoreController extends Component {

    start() {
        const googlePlay = 'https://play.google.com/store/apps/details?id=com.evrika.word.solitaire.card.puzzle&pli=1';
        const appstore = 'https://apps.apple.com/us/app/word-solitaire-journey/id6739961990';

        super_html_playable.set_google_play_url(googlePlay);
        super_html_playable.set_app_store_url(appstore);
    }
    
}

