/* eslint no-console: off */

//common modules
import {showParagraph} from "../../cmi-www/modules/_util/url";
import auth from "../../cmi-www/modules/_user/netlify";
import fb from "../../cmi-www/modules/_util/facebook";
import {initTranscriptPage} from "../../cmi-www/modules/_page/startup";

import {loadConfig} from "./modules/_config/config";
import {bookmarkStart} from "./modules/_bookmark/start";
import search from "./modules/_search/search";
import toc, {getBookId} from "./modules/_contents/toc";
import audio from "./modules/_audio/audio";
import about from "./modules/_about/about";

import {setLanguage} from "../../cmi-www/modules/_language/lang";
import constants from "./constants";

$(document).ready(() => {

  setLanguage(constants);
  initTranscriptPage();
  auth.initialize();
  fb.initialize();
  about.initialize();

  //load config file and do initializations that depend on a loaded config file
  loadConfig(getBookId())
    .then((result) => {
      search.initialize();

      /*
        result of 0 indicates no contents config found
        - toc, and audio depend on config file
      */
      if (result !== 0) {
        toc.initialize("transcript");
        audio.initialize();
      }
      showParagraph();
      bookmarkStart("transcript");
    })
    .catch((error) => {
      //report error to the user - somehow
      console.error(error);
    });
});
